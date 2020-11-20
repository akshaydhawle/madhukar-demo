const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const {
	SECURITY: { JWT_SECRET },
} = require('../config');
// 2 min
const { usersModel } = require('../models');
const { fstat } = require('fs');

const genSaltASync = promisify(bcrypt.genSalt);
const hashASync = promisify(bcrypt.hash);
const compareASync = promisify(bcrypt.compare);

module.exports.UserController = {
	ping,
	login,
	register,
};

async function ping(req, res) {
	res.send('pong');
}

async function login(req, res) {
	try {
		const { email, role, password } = req.body;

		const user = await usersModel.findOne({ $and: [{ email: email }, { role: role }] });
		if (!user) return res.status(400).send('user not found');

		const isValidPassword = await compareASync(password, user.password);
		if (!isValidPassword) return res.status(400).send('incorrect password');

		const payload = JSON.parse(JSON.stringify(user));
		const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

		res.status(200).send(token);
	} catch (error) {
		return res.status(500).send('internal server error');
	}
}

async function register(req, res) {
	try {
		const { email, password } = req.body;

		const usr = await usersModel.findOne({ email: email }, { _id: 1 });
		if (usr) return res.status(409).send('user already exists');

		// generate hash of password
		// generate salt which can be used to combine with password to encrypt
		const salt = await genSaltASync(10);
		const hash = await hashASync(password, salt);
		req.body.password = hash;

		const user = await usersModel(req.body).save();

		// mongoose have data with nested data and functions we just need data here so lets copy only required data
		let payload = JSON.parse(JSON.stringify(user));

		// delete password from payload, so if anyone decode the token anway, then he not be able to find password
		delete payload.password;

		/**
		 * create token using jwt lib, which uses RSA algo, you can decode the data which you've encoded.
		 * make sure not store imp data into it
		 *  */
		const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

		// send token
		res.status(201).send(token);
	} catch (error) {
		return res.status(500).send(`internal server error ${error}`);
	}
}
