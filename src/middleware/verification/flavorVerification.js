const {
  check
} = require('express-validator');

module.exports = [
  check('name').isString(),
  check('calories_per_serving').isDecimal(),
  check('product_line').isString(),
  check('quantity').isInt(),
  check('price').isDecimal(),
];