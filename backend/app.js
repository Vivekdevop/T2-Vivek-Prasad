const express = require("express");
const app = express();
const cors = require("cors");

const driverRoutes = require("./routes/driverRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const orderRoutes = require("./routes/orderRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const authRoutes = require("./routes/authRoutes");
app.use(cors());

app.use(express.json());

app.use("/api/drivers", driverRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;