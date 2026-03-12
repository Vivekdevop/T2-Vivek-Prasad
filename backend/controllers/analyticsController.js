// backend/controllers/analyticsController.js
const Driver = require("../models/Driver");
const Order = require("../models/Order");
const OrderHistory = require("../models/OrderStatusHistory");

exports.getAnalytics = async (req, res) => {
  try {
    const activeDrivers = await Driver.count({ where: { status: "active" } });
    const ordersInProgress = await Order.count({
      where: { status: ["Assigned", "InTransit"] }
    });
    const completedDeliveries = await Order.count({ where: { status: "Delivered" } });

    // Example average delivery time
    const deliveredOrders = await Order.findAll({
      where: { status: "Delivered" }
    });
    let totalTime = 0;
    deliveredOrders.forEach(order => {
      totalTime += new Date(order.updatedAt) - new Date(order.createdAt);
    });
    const avgDeliveryTime = deliveredOrders.length
      ? totalTime / deliveredOrders.length / 1000 / 60
      : 0;

    res.json({
      activeDrivers,
      ordersInProgress,
      completedDeliveries,
      avgDeliveryTime
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};