const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/",orderController.createOrder);

router.put("/assign/:id",orderController.assignOrder);

router.put("/status/:id",orderController.updateOrderStatus);

router.get("/",orderController.getOrders);

router.get("/history/:id",orderController.getOrderHistory);
module.exports = router;
