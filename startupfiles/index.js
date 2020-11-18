const { setCors } = require('./cors');
const { startDb } = require('./db');
const { startRoutes } = require('./routes');
const { startServer } = require('./server');

module.exports = {
	setCors,
	startDb,
	startRoutes,
	startServer,
};
