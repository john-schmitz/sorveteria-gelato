const Operators = require('../models/index').Sequelize.Op;
const Flavor = require('../models/Flavor');

module.exports = {
  async all(req, res, next) {
    try {
      const flavors = await Flavor.findAll({
        where: {
          quantity: {
            [Operators.gt]: 0
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
      const flavor = await Flavor.create(req.body);

      return res.status(201).json({
        flavor,
      });
    } catch (error) {
      next(error);
    }
  },
  async byId(req, res, next) {
    try {
      const {
        id
      } = req.params;
      const flavor = await Flavor.findByPk(id);
      if (!flavor) {
        return res.status(404).json({
          message: 'Flavor not found'
        });
      }

      return res.status(200).json({
        flavor
      });
    } catch (error) {
      next(error);
    }
  }
}