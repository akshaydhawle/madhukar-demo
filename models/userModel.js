const { Schema, model } = require('mongoose');

const options = { timestamps: true };

const users = new Schema(
	{
		name: String,
		email: { type: String, unique: true },
		password: { type: String },
		role: { type: String },
	},
	options
);

// users.pre('save', () => {});

module.exports.usersModel = model('users', users);
