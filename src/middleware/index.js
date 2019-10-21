const requestLogger = require('./requestLogger');
const notFound = require('./404');
const errorHandler = require("./errorHandler");

module.exports = {
  requestLogger,
  notFound,
  errorHandler
};