const express = require('express');
const { UserController } = require('../controllers/index');

const userRouter = express.Router();

userRouter.get('/ping', UserController.ping);

userRouter.post('/', UserController.register);
userRouter.post('/auth', UserController.login);

module.exports = userRouter;
