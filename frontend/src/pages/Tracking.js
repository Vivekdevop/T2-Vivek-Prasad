import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Tracking(){

 useEffect(()=>{

  socket.on("driverLocation",(data)=>{

   console.log("Driver Location:",data);

  });

 },[]);

 return(

  <div>
   <h2>Live Driver Tracking</h2>
  </div>

 );

}

export default Tracking;
