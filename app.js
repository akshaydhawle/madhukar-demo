const express = require('express');
const app = express();

const { startServer, startDb, setCors, startRoutes } = require('./startupfiles');

// start server
startServer(app);

// start db
startDb();

// set cors
setCors(app);

// start Routing
startRoutes(app);
