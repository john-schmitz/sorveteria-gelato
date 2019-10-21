const Sequelize = require('sequelize');
const config = require('../../config/database.js');

const Flavor = require('./Flavor');

const connection = new Sequelize(config);

Flavor.init(connection);

module.exports = connection;