import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";

function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/drivers" element={<Drivers />} />
    <Route path="/vehicles" element={<Vehicles />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/tracking" element={<Tracking />} />

   </Routes>

  </BrowserRouter>

 );

}

export default App;