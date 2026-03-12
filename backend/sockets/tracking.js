module.exports = (io)=>{

 io.on("connection",(socket)=>{

  console.log("Driver connected:",socket.id);

  socket.on("locationUpdate",(data)=>{

   console.log("Location:",data);

   io.emit("driverLocation",data);

  });

 });

};