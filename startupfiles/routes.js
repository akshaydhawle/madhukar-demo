const express = require('express');

const { userRouter, customersRouter, ordersRouter, propertiesRouter } = require('../routes/index');

const startRoutes = (app) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.use('/user', userRouter);
	app.use('/customers', customersRouter);
	app.use('/orders', ordersRouter);
	app.use('/properties', propertiesRouter);
	app.use('*', (req, res) => res.send('not found'));
};

module.exports = {
	startRoutes,
};
