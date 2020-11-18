const express = require('express');
const { CustomerController } = require('../controllers/index');
const { auth } = require('../middlewares/auth');

const customerRouter = express.Router();

customerRouter.get('/ping', CustomerController.ping);

customerRouter.use(auth('ADMIN'));
customerRouter.get('/', CustomerController.getCustomers);

module.exports = customerRouter;
