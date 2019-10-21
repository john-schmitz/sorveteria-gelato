const {
  Model,
  DataTypes
} = require('sequelize');

class Flavor extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      calories_per_serving: DataTypes.DOUBLE,
      productLine: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DOUBLE
    }, {
      sequelize
    })
  }
}

module.exports = Flavor;