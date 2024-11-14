import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  

const Header = () => {
    return (
        <header className="header">
            {/* Adding the logo image */}
            <img 
                src="https://i.pinimg.com/736x/af/37/c7/af37c71d9d7fe4a19ae39a2e499468c0.jpg" 
                alt="SmartWare Hub Logo" 
                className="header-logo"
            />
            <h1>SmartWare Hub</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/cart">Cart</Link> {/* Link to the cart */}
            </nav>
        </header>
    );
};

export default Header;
