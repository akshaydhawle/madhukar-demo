const Cors = require('cors');
const { CORS } = require('../config');

module.exports.setCors = (app) => {
	const corsOptions = {
		origin: CORS.ALLOW_ORIGINS,
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	};
	app.use(Cors(corsOptions));
};
