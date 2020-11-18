const { customers } = require('../data/customers.json');

module.exports.CustomerController = {
	ping,
	getCustomers,
};

async function ping(req, res) {
	res.send('pong');
}

async function getCustomers(req, res) {
	try {
		res.send(customers);
	} catch (error) {
		return res.status(500).send('internal server error');
	}
}
