const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("logistics_db","postgres","test",{
 host:"localhost",
 dialect:"postgres"
});

module.exports = sequelize;