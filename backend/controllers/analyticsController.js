const Driver = require("../models/Driver");
const Vehicle = require("../models/Vehicle");
const Order = require("../models/Order");

exports.getStats = async (req,res)=>{

 try{

  const totalDrivers = await Driver.count();
  const totalVehicles = await Vehicle.count();
  const totalOrders = await Order.count();

  const deliveredOrders = await Order.count({
   where:{status:"Delivered"}
  });

  const inTransitOrders = await Order.count({
   where:{status:"InTransit"}
  });

  res.json({
   totalDrivers,
   totalVehicles,
   totalOrders,
   deliveredOrders,
   inTransitOrders
  });

 }catch(error){
  res.status(500).json({error:error.message});
 }

};