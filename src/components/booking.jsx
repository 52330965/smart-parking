import { useState } from "react"
import "./booking.css";


const booking=()=>{
  const [zone,setzone]=useState("A");
  const[hours,sethours]=useState(0);
  const prices=zone==="A"?2 :zone==="B"? 3:zone==="C"? 4:0;
  const total=hours*prices;

return(
  <div className="booking">
    <h1 id="booking-title">Booking Page</h1>
    <label className="label">Select Zone:</label>
    <br/>
    <button className="btn btn-primary" onClick={ ()=>setzone("A")}>Zone A</button>
    <br />
    <button className="btn btn-primary" onClick={ ()=>setzone("B")}>Zone B</button>
    <br />
    <button className="btn btn-primary" onClick={ ()=>setzone("C")}>Zone C</button>
    <br />
    <label>Hours:</label>
    <input type="number" placeholder="hours" value={hours} onChange={(e) => sethours(Number(e.target.value))}/>
    <br />
    <h3>Total: {total}$</h3>
    <button className="btn-confirm btn-success" onClick={() => alert(`You have booked Zone ${zone} for ${hours} hours. Total cost: ${total}$`)}>
      Confirm Booking
    </button>
    <button className="btn-reset btn-secondary" onClick={ ()=>setzone("")}>Reset</button>
  </div>
 

  );
 
};

export default booking;