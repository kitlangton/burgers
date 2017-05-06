const Sequelize = require("sequelize");
const orm = require("../config/orm");

// Burger Model definition
const Burger = orm.define("burger", {
  name: Sequelize.STRING,
  devoured: { type: Sequelize.BOOLEAN, defaultValue: false }
});

// Seeds
Burger.sync({ force: true }).then(() => {
  Burger.create({
    name: "Good Burger"
  });
  Burger.create({
    name: "Eaten Burger",
    devoured: true
  });
});

module.exports = Burger;
