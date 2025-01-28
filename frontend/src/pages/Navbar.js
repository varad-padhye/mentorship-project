import { Link } from 'react-router-dom';
import '../components/navbar.css';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/dashboard">Dash</Link>
                <Link to="/stats">stats</Link>
                <Link to="/profile">profile</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;