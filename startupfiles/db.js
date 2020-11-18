const mongoose = require('mongoose');
const {
	MONGO_CONFIG: { MONGO_URI },
} = require('../config');

module.exports.startDb = () => {
	mongoose
		.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
		.then((_) => console.log('connected to the database'))
		.catch((err) => console.log(err));
};
