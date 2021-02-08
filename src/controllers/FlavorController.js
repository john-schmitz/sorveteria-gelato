const Operators = require('../models/index').Sequelize.Op;
const Flavor = require('../models/Flavor');

const FlavorService = require('../services/FlavorsService');

module.exports = {
  async all(req, res, next) {
    try {
      const flavors = await FlavorService.findAllFlavors();

      return res.send({
        flavors
      });
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const flavor = await FlavorService.create(req.body);

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
      const flavor = await FlavorService.findById(id);
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