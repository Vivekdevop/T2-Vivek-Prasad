import { useEffect,useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Drivers(){

 const [drivers,setDrivers] = useState([]);

 useEffect(()=>{

  API.get("/drivers")
  .then(res=>setDrivers(res.data));

 },[]);

 return(

  <div>

   <Navbar/>

   <div className="container mt-4">

    <h2>Drivers</h2>

    <table className="table">

     <thead>
      <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Phone</th>
       <th>Status</th>
      </tr>
     </thead>

     <tbody>

      {drivers.map(d=>(

       <tr key={d.id}>
        <td>{d.id}</td>
        <td>{d.name}</td>
        <td>{d.phone}</td>
        <td>{d.status}</td>
       </tr>

      ))}

     </tbody>

    </table>

   </div>

  </div>

 );

}

export default Drivers;
