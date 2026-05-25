import { Link } from 'react-router-dom';
import car from '../assets/image/car.jpg';
import "./home.css";
const Home = () => {
  return (
    <div className="homediv">
      <h1 className="homeh1">Welcome to My Smart Parking!</h1>
      <p className="homep"><h3>Your one-stop solution for hassle-free parking. Find available parking spots, reserve your space, </h3></p>
      <p><h3>and enjoy a seamless parking experience with our smart technology. Say goodbye to circling the block and hello to stress-free parking!</h3>
     <button className="homebutton"><Link to="/zone" id="get-started">Get Started</Link></button></p>
        <img className="homeimg" src={car} alt="Smart Parking" />
      
    </div>
  );
};

export default Home;