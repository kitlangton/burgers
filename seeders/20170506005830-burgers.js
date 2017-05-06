"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Burger",
      [
        {
          name: "Cheese",
          devoured: true
        },
        {
          name: "Meat",
          devoured: false
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Burger", null, {});
  }
};
