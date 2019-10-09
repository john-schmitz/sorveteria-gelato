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
      }).catch(e => next(e));
    });
  },
  create(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const a = 10;
    a.split();
    db.Flavor.create(req.body).then((flavor) => {
      return res.status(201).json({flavor});
    }).catch(e => next(e));
  },
  byId(req, res, next) {

  },
}