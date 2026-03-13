import { useEffect,useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard(){

 const [stats,setStats] = useState({});

 useEffect(()=>{

  API.get("/analytics/dashboard")
  .then(res=>setStats(res.data));

 },[]);

 return(

  <div>

   <Navbar/>

   <div className="container mt-4">

    <h2>Analytics Dashboard</h2>

    <div className="row">

     <div className="col-md-3">
      <div className="card p-3">
       Active Drivers
       <h3>{stats.activeDrivers}</h3>
      </div>
     </div>

     <div className="col-md-3">
      <div className="card p-3">
       Orders In Progress
       <h3>{stats.ordersInProgress}</h3>
      </div>
     </div>

     <div className="col-md-3">
      <div className="card p-3">
       Completed Deliveries
       <h3>{stats.completedDeliveries}</h3>
      </div>
     </div>

     <div className="col-md-3">
      <div className="card p-3">
       Driver Utilization
       <h3>{stats.driverUtilization}%</h3>
      </div>
     </div>

    </div>

   </div>

  </div>

 );

}

export default Dashboard;
