const Order = require("../models/Order");
const Driver = require("../models/Driver");
const Vehicle = require("../models/Vehicle");
const OrderHistory = require("../models/OrderStatusHistory");


// CREATE ORDER
exports.createOrder = async (req,res)=>{

 try{

  const order = await Order.create({
   pickupLocation:req.body.pickupLocation,
   deliveryLocation:req.body.deliveryLocation
  });

  await OrderHistory.create({
   orderId:order.id,
   status:"Created"
  });

  res.json(order);

 }catch(err){
  res.status(500).json({error:err.message});
 }

};


// ASSIGN DRIVER
exports.assignOrder = async (req,res)=>{

 try{

  const {id} = req.params;
  const {driverId} = req.body;

  const driver = await Driver.findByPk(driverId);

  if(!driver){
   return res.status(404).json({message:"Driver not found"});
  }

  if(driver.status === "inactive"){
   return res.status(400).json({
    message:"Cannot assign inactive driver"
   });
  }

  const vehicle = await Vehicle.findOne({
   where:{driverId}
  });

  if(!vehicle){
   return res.status(400).json({
    message:"Driver has no vehicle"
   });
  }

  const activeOrder = await Order.findOne({
   where:{
    driverId,
    status:"InTransit"
   }
  });

  if(activeOrder){
   return res.status(400).json({
    message:"Driver already assigned to another order"
   });
  }

  await Order.update(
   {
    driverId,
    vehicleId:vehicle.id,
    status:"Assigned"
   },
   {where:{id}}
  );

  await OrderHistory.create({
   orderId:id,
   status:"Assigned"
  });

  res.json({message:"Order assigned successfully"});

 }catch(err){
  res.status(500).json({error:err.message});
 }

};


// UPDATE ORDER STATUS
exports.updateOrderStatus = async (req,res)=>{

 try{

  const {id} = req.params;
  const {status} = req.body;

  await Order.update(
   {status},
   {where:{id}}
  );

  await OrderHistory.create({
   orderId:id,
   status
  });

  res.json({message:"Order status updated"});

 }catch(err){
  res.status(500).json({error:err.message});
 }

};


// GET ALL ORDERS
exports.getOrders = async (req,res)=>{

 const orders = await Order.findAll();

 res.json(orders);

};


// GET ORDER HISTORY
exports.getOrderHistory = async (req,res)=>{

 const history = await OrderHistory.findAll({
  where:{orderId:req.params.id}
 });

 res.json(history);

};

exports.assignOrder = async (req,res)=>{

 try{

  const {driverId} = req.body;
  const {id} = req.params;

  const driver = await Driver.findByPk(driverId);

  if(!driver){
   return res.status(404).json({message:"Driver not found"});
  }

  if(driver.status === "inactive"){
   return res.status(400).json({
    message:"Cannot assign inactive driver"
   });
  }

  const vehicle = await Vehicle.findOne({
   where:{driverId}
  });

  if(!vehicle){
   return res.status(400).json({
    message:"Driver has no vehicle assigned"
   });
  }

  const activeOrder = await Order.findOne({
   where:{
    driverId,
    status:"InTransit"
   }
  });

  if(activeOrder){
   return res.status(400).json({
    message:"Driver already assigned to another order"
   });
  }

  await Order.update(
   {
    driverId,
    vehicleId:vehicle.id,
    status:"Assigned"
   },
   {where:{id}}
  );

  await OrderHistory.create({
   orderId:id,
   status:"Assigned"
  });

  res.json({message:"Order assigned successfully"});

 }catch(err){
  res.status(500).json({error:err.message});
 }

};

exports.updateOrderStatus = async (req,res)=>{

 try{

  const {id} = req.params;
  const {status} = req.body;

  await Order.update(
   {status},
   {where:{id}}
  );

  await OrderHistory.create({
   orderId:id,
   status
  });

  res.json({
   message:"Order status updated"
  });

 }catch(err){
  res.status(500).json({error:err.message});
 }

};

exports.getOrders = async (req,res)=>{

 const orders = await Order.findAll();

 res.json(orders);

};

exports.getOrderHistory = async (req,res)=>{

 const history = await OrderHistory.findAll({
  where:{orderId:req.params.id}
 });

 res.json(history);

};
