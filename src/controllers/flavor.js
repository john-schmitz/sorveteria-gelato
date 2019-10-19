const db = require('../models');
const Flavor = require('../models/Flavor');

module.exports = {
  async all(req, res, next) {
    try {
      const flavors = await Flavor.findAll({
        where: {
          quantity: {
            [db.Sequelize.Op.gt]: 0
          }
        }
      });

      return res.send({
        flavors
      });
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const flavor = await Flavor.create(req.body)

      return res.status(201).json({
        flavor,
      });
    } catch (error) {
      next(error);
    }
  },
  async byId(req, res, next) {
    try {
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array()
        });
      }

      const { id } = req.params;
      const flavor = await Flavor.findByPk(id);

      return res.statu(200).jsos({
        flavor
      });
    } catch (error) {
      next(error);
    }
  },
}