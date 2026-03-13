import { useEffect,useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Orders(){

 const [orders,setOrders] = useState([]);

 useEffect(()=>{

  API.get("/orders")
  .then(res=>setOrders(res.data));

 },[]);

 return(

  <div>

   <Navbar/>

   <div className="container mt-4">

    <h2>Orders</h2>

    <table className="table">

     <thead>
      <tr>
       <th>ID</th>
       <th>Pickup</th>
       <th>Delivery</th>
       <th>Status</th>
      </tr>
     </thead>

     <tbody>

      {orders.map(o=>(

       <tr key={o.id}>
        <td>{o.id}</td>
        <td>{o.pickupLocation}</td>
        <td>{o.deliveryLocation}</td>
        <td>{o.status}</td>
       </tr>

      ))}

     </tbody>

    </table>

   </div>

  </div>

 );

}

export default Orders;
