const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OrderStatusHistory = sequelize.define("OrderStatusHistory",{

 orderId:{
  type:DataTypes.INTEGER
 },

 status:{
  type:DataTypes.STRING
 }

});

module.exports = OrderStatusHistory;