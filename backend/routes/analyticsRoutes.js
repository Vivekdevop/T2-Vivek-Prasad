const express = require("express");
const router = express.Router();

const analytics = require("../controllers/analyticsController");

router.get("/stats",analytics.getStats);

module.exports = router;