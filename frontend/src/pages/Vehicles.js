import { useEffect,useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Vehicles(){

 const [vehicles,setVehicles] = useState([]);

 useEffect(()=>{

  API.get("/vehicles")
  .then(res=>setVehicles(res.data));

 },[]);

 return(

  <div>

   <Navbar/>

   <div className="container mt-4">

    <h2>Vehicles</h2>

    <table className="table">

     <thead>
      <tr>
       <th>ID</th>
       <th>Plate</th>
       <th>Type</th>
       <th>Capacity</th>
      </tr>
     </thead>

     <tbody>

      {vehicles.map(v=>(

       <tr key={v.id}>
        <td>{v.id}</td>
        <td>{v.plateNumber}</td>
        <td>{v.vehicleType}</td>
        <td>{v.capacity}</td>
       </tr>

      ))}

     </tbody>

    </table>

   </div>

  </div>

 );

}

export default Vehicles;
