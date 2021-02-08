const Flavor = require('../models/Flavor');

module.exports = {
    async findAllFlavors() {
        const flavors = await Flavor.findAll({
            where: {
                quantity: {
                    [Operators.gt]: 0
                }
            }
        });
        return flavors;
    },
    async create({ name, calories_per_serving, product_line, quantity, price }) {
        const flavor = await Flavor.create({ name, calories_per_serving, product_line, quantity, price });

        return flavor;
    },
    async findById(id) {
        const flavor = await Flavor.findByPk(id);
        return flavor;
    }
}