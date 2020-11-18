const { SERVER } = require('../config/index');
module.exports.startServer = (app) => {
	app.listen(SERVER.PORT, () => {
		console.log(`server started at port ${SERVER.PORT}`);
	});
};
