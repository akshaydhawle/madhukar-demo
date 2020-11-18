const express = require('express');
const { OrderController } = require('../controllers/index');
const { auth } = require('../middlewares/auth');

const orderRouter = express.Router();

orderRouter.get('/ping', OrderController.ping);

orderRouter.use(auth('ADMIN'));
orderRouter.get('/', OrderController.getOrders);

module.exports = orderRouter;
