import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <h1>Logo</h1>

            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#developers">Our Developers</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>

            <button>Connect</button>
        </header>
    );
}