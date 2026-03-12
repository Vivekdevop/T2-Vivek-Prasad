const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Driver = sequelize.define("Driver", {
  name: DataTypes.STRING,
  phone: DataTypes.STRING,
  licenseNumber: DataTypes.STRING,
  status: {
    type: DataTypes.STRING,
    defaultValue: "available"
  }
});

module.exports = Driver;