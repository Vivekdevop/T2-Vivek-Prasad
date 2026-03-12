const express = require("express");
const router = express.Router();

// ✅ Import the analytics controller
const analyticsController = require("../controllers/analyticsController");

// ✅ Register the route
router.get("/dashboard", analyticsController.getAnalytics);

module.exports = router;