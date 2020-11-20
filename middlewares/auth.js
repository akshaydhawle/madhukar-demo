const jwt = require('jsonwebtoken');
const {
	SECURITY: { JWT_SECRET },
} = require('../config');

module.exports.auth = (multiRole) => (req, res, next) => {
	try {
		const token = req.get('x-auth-token');
		if (!token) return res.status(404).send('please provide token');

		// decode token
		const decoded = jwt.verify(token, JWT_SECRET);

		// check current user access
		if (!multiRole.includes(decoded.role)) return res.status(403).send('permission denied');

		// add user to request, so apis can access data
		req.user = decoded;

		// if everything goes well, then pass control to next function.
		next();
	} catch (error) {
		return res.status(500).send(error);
	}
};
