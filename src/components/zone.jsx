
import { useState } from "react";
import mall from "../assets/image/Mall.jpg";
import building from "../assets/image/building.jpg";
import garage from "../assets/image/garage.webp";
import "./zone.css";
const Zone = () => {

  const [spotsA, setSpotsA] = useState(25);
  const [spotsB, setSpotsB] = useState(18);
  const [spotsC, setSpotsC] = useState(10);

  const handleZoneA = () => {

    if (spotsA > 0) {

      setSpotsA(spotsA - 1);
    }
  };

  const handleZoneB = () => {

    if (spotsB > 0) {

      setSpotsB(spotsB - 1);
    }
  };

  const handleZoneC = () => {

    if (spotsC > 0) {

      setSpotsC(spotsC - 1);
    }
  };

  return (

    <div className="container mt-5">
      <h1 >Parking Zones</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card ">
            <img src={mall} />
            <div className="card-body text-center">
              <h3>Zone A</h3>
              <p>
                open 24/7 indoor parking
                security cameras&Guards CCTV Lighting Easy Access 
              </p>
              <h5>
                2$/hour
              </h5>
              <p>Available Spots:{spotsA}</p>
              <button className="btn btn-primary w-100" onClick={handleZoneA}>
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card ">
           <img src={building}  />
            <div className="card-body text-center">
              <h3>Zone B</h3>
              <p>
                Building Parking spots availabe 10 underground parking access(for visitors & tenants)24/7 
                CCTV+Security Guard covered Parking Elevator access easy entry & Exit 
              </p>
              <h5>3$/hour</h5>
              <p> Available Spots:{spotsB}</p>

              <button
                className="btn btn-success w-100" onClick={handleZoneB}> Book Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card ">
            <img src={garage}  />
            <div className="card-body text-center">
              <h3>Zone C</h3>
              <p> Garage Parking Garage city center spots available 7 multi-level Garage open 24/7
                 CCTV + Security Patrol Multiple Floors Easy Access Well-Lit Area</p>
              <h5>4$/hour</h5>
              <p>Available Spots:{spotsC}</p>
              <button className="btn btn-dark w-100"onClick={handleZoneC} >Book Now </button>
          </div>
           </div>
            </div>
      </div>
    </div>

  );
};

export default Zone;


