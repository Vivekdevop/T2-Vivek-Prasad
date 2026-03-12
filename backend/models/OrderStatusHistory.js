const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OrderStatusHistory = sequelize.define("OrderStatusHistory", {
  orderId: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = OrderStatusHistory;