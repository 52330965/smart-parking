import { useState } from "react"



const booking=()=>{
  const [zone,setzone]=useState("A");
  const[hours,sethours]=useState(1);
  const prices=zone==="A"?2 :zone==="B"? 3:4;
  const total=hours*prices;
}

export default booking