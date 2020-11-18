const { properties } = require('../data/properties.json');

exports.PropertiesController = {
	ping,
	getProperties,
};

async function ping(req, res) {
	res.send('pong');
}

async function getProperties(req, res) {
	try {
		res.send(properties);
	} catch (error) {
		return res.status(500).send('internal server error');
	}
}
