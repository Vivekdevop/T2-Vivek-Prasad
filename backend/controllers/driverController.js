const Driver = require("../models/Driver");

exports.createDriver = async (req,res)=>{
 const driver = await Driver.create(req.body);
 res.json(driver);
};

exports.getDrivers = async (req,res)=>{

 const drivers = await Driver.findAll({
  where:{status:"available"}
 });

 res.json(drivers);
};

exports.updateDriver = async (req,res)=>{
 const {id} = req.params;

 await Driver.update(req.body,{where:{id}});

 res.json({message:"Driver updated"});
};

exports.deleteDriver = async (req,res)=>{

 const {id} = req.params;

 await Driver.update(
  {status:"inactive"},
  {where:{id}}
 );

 res.json({message:"Driver soft deleted"});
};

exports.deactivateDriver = async (req,res)=>{

 await Driver.update(
  {status:"inactive"},
  {where:{id:req.params.id}}
 );

 res.json({message:"Driver deactivated"});
};