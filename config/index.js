const SERVER = {
	PORT: 8000,
	BASE_URL: '/api/v1',
};

const MONGO_CONFIG = {
	MONGO_URI: 'mongodb://localhost:27017/test',
};

const SECURITY = {
	JWT_SECRET: '123@2b',
};

const CORS = {
	ALLOW_ORIGINS: ['http://localhost:3000'],
	ALLOW_METHODS: [],
};

module.exports = {
	SERVER,
	SECURITY,
	MONGO_CONFIG,
	CORS,
};
