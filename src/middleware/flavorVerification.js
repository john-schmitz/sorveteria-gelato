const {
  check
} = require('express-validator');

module.exports = [
  check('name').isString(),
  check('calories').isDecimal(),
  check('productLine').isString(),
  check('quantity').isInt(),
  check('price').isDecimal(),
];