const Sequelize = require("sequelize");
var orm = new Sequelize("BurgersDev", "root");

module.exports = orm;
