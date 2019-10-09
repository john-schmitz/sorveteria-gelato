module.exports = (sequelize, DataTypes) => {
  const Flavor = sequelize.define('Flavor', {
    name: DataTypes.STRING,
    calories: DataTypes.DOUBLE,
    productLine: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  });

  return Flavor;
}
