import React, { useState } from 'react';
import '../style/navBar.css';
import logoImage from '../img/bitcoin.gif';  // Make sure the path is correct

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
        // Implement your search logic here or navigate to a search page
    };

    return (
        <nav>
            <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="menu-items">
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`line1 ${isOpen ? "toggle" : ""}`}></div>
                    <div className={`line2 ${isOpen ? "toggle" : ""}`}></div>
                    <div className={`line3 ${isOpen ? "toggle" : ""}`}></div>
                </div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><button className="login-button">Login</button></li>
                    <li><button className="join-button">Join</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;