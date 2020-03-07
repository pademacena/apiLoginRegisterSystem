const express = require('express');

const UserAuthController = require('./controllers/UserAuthControllers');
const UserRegistController = require('./controllers/UserRegistControllers');

const routes = express.Router();

routes.post('/api/auth', UserAuthController.store);
routes.post('/api/register', UserRegistController.store);

module.exports = routes;