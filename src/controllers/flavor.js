const db = require('../models');


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

  },
  byId(req, res, next) {

  },
}