const express = require('express');
const { PropertiesController } = require('../controllers/index');
const { auth } = require('../middlewares/auth');

const propertiesRouter = express.Router();

propertiesRouter.get('/ping', PropertiesController.ping);

propertiesRouter.use(auth('ADMIN'));
propertiesRouter.get('/', PropertiesController.getProperties);

module.exports = propertiesRouter;
