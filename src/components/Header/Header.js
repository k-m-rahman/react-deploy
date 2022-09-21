import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome To My React REST Countries !!!</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/settings">Settings</a>
            </nav>
        </div>
    );
};

export default Header;