const io = require("socket.io-client");

const socket = io("http://localhost:5000");

setInterval(()=>{

 socket.emit("locationUpdate",{
  driverId:1,
  lat:12.9716 + Math.random()/100,
  lng:77.5946 + Math.random()/100
 });

},3000);