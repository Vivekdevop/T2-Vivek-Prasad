const Vehicle = require("../models/Vehicle");
const Driver = require("../models/Driver");


// CREATE VEHICLE
exports.createVehicle = async (req,res)=>{

 try{

  const {plateNumber,vehicleType,capacity,driverId} = req.body;

  // Check if driver already assigned
  if(driverId){

   const existingVehicle = await Vehicle.findOne({
    where:{driverId}
   });

   if(existingVehicle){
    return res.status(400).json({
     message:"Driver already assigned to another vehicle"
    });
   }

   // Check if driver inactive
   const driver = await Driver.findByPk(driverId);

   if(driver && driver.status === "inactive"){
    return res.status(400).json({
     message:"Cannot assign inactive driver"
    });
   }

  }

  const vehicle = await Vehicle.create({
   plateNumber,
   vehicleType,
   capacity,
   driverId
  });

  res.json(vehicle);

 }catch(error){
  res.status(500).json({error:error.message});
 }

};


// GET VEHICLES
exports.getVehicles = async (req,res)=>{

 const vehicles = await Vehicle.findAll();

 res.json(vehicles);

};


// DEACTIVATE VEHICLE
exports.deactivateVehicle = async (req,res)=>{

 await Vehicle.update(
  {status:"inactive"},
  {where:{id:req.params.id}}
 );

 exports.deleteDriver = async (req,res)=>{

 await Driver.update(
  {status:"inactive"},
  {where:{id:req.params.id}}
 );

 res.json({message:"Driver soft deleted"});
};

 res.json({message:"Vehicle deactivated"});

};

exports.deleteVehicle = async (req,res)=>{

 await Vehicle.update(
  {status:"inactive"},
  {where:{id:req.params.id}}
 );

 res.json({message:"Vehicle soft deleted"});
};