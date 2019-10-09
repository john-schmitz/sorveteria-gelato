const db = require('../models');
const {
  check,
  validationResult
} = require('express-validator');

module.exports = {
  all(req, res, next) {
    db.Flavor.findAll({
      where: {
        quantity: {
          [db.Sequelize.Op.gt]: 0
        }
      }
    }).then(flavors => {
      return res.send({
        flavors
      });
    });
  },
  create(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  },
  byId(req, res, next) {

  },
}