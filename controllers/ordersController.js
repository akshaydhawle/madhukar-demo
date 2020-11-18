const { orders } = require('../data/orders.json');

exports.OrderController = {
	ping,
	getOrders,
};

async function ping(req, res) {
	res.send('pong');
}

async function getOrders(req, res) {
	try {
		res.send(orders);
	} catch (error) {
		return res.status(500).send('internal server error');
	}
}
