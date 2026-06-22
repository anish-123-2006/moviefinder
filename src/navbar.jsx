import { Link } from "react-router-dom";
import "./css/navbar.css";
function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to ="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">home</Link>
            <Link to ="/fav" className="nav-link">favorites</Link>
        </div>
    </nav>
}

export default NavBar;