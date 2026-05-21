import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/zone">zone</Link></li>
                <li><Link to="/booking">booking</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar