const app = require("./app");
const http = require("http");
const { Server } = require("socket.io");
const sequelize = require("./config/database");

const server = http.createServer(app);

const io = new Server(server,{
  cors:{ origin:"*" }
});


// ✅ IMPORT MODELS HERE
require("./models/User");
require("./models/Driver");
require("./models/Vehicle");
require("./models/Order");
require("./models/OrderStatusHistory");


// ✅ Import tracking socket
const tracking = require("./sockets/tracking");

// ✅ Initialize socket tracking
tracking(io);


// ✅ Connect database and create tables
sequelize.sync({ alter: true })
.then(()=>{
  console.log("Database connected and tables created");
})
.catch(err => console.log(err));


// ✅ Start server
server.listen(5000,()=>{
  console.log("Server running on port 5000");
});