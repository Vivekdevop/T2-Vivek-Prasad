const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Vehicle = sequelize.define("Vehicle", {

 plateNumber: {
  type: DataTypes.STRING
 },

 vehicleType: {
  type: DataTypes.STRING
 },

 capacity: {
  type: DataTypes.INTEGER
 },

 driverId: {
  type: DataTypes.INTEGER
 },

 status:{
  type:DataTypes.STRING,
  defaultValue:"active"
 }

});

module.exports = Vehicle;