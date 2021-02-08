'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Flavors', [
      {
        name: 'Flocos',
        calories_per_serving: 11400,
        product_line: "Cremosíssimo",
        quantity: 30,
        price: 24.50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tentação',
        calories_per_serving: 11600,
        product_line: "Cremosíssimo",
        quantity: 9,
        price: 29.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Napolitano',
        calories_per_serving: 13000,
        product_line: "Cremosíssimo",
        quantity: 13,
        price: 22.50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Flavors', null, {});
  }
};
