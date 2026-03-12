const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order",{

 pickupLocation:{
  type:DataTypes.STRING
 },

 deliveryLocation:{
  type:DataTypes.STRING
 },

 status:{
  type:DataTypes.STRING,
  defaultValue:"Created"
 },

 driverId:{
  type:DataTypes.INTEGER
 },

 vehicleId:{
  type:DataTypes.INTEGER
 }

});

module.exports = Order;