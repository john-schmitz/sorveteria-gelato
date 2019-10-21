const Sequelize = require('sequelize');
const config = require('./config/database.js.js');

const Flavor = require('../models/Flavor');

const connection = new Sequelize(config);

Flavor.init(connection);

module.exports = connection;