import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar.jsx";
import Home from "./components/home.jsx";
import Zone from "./components/zone.jsx";
import Booking from "./components/Booking.jsx";
import Login from "./components/Login.jsx";
const App=()=> {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zone" element={<Zone />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    

    </>
  );

};

  export default App;