import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">Logo</div>
            <nav className="navbar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/our-developers">Our developers</NavLink>
                <NavLink to="/developers">Developers ▾</NavLink>
            </nav>
            <button className="navbar-connect">Connect</button>
        </header>
    );
}
