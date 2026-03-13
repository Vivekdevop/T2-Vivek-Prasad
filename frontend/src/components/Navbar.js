import { Link } from "react-router-dom";

function Navbar(){

 return(

  <nav className="navbar navbar-dark bg-dark p-3">

   <Link className="navbar-brand" to="/dashboard">
    Logistics Dashboard
   </Link>

   <div>

    <Link className="btn btn-light me-2" to="/drivers">
     Drivers
    </Link>

    <Link className="btn btn-light me-2" to="/vehicles">
     Vehicles
    </Link>

    <Link className="btn btn-light me-2" to="/orders">
     Orders
    </Link>

    <Link className="btn btn-light me-2" to="/tracking">
     Tracking
    </Link>

   </div>

  </nav>

 );

}

export default Navbar;
