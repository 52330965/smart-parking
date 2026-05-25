import "./Navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h2><Link to={"/"}>Home</Link></h2>
            <ul className="nav-links">         
                <li><Link to="/zone">zone</Link></li>
                <li><Link to="/booking">booking</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </nav>
        
    );
};

export default Navbar;