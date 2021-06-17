import React from 'react';
import './header.css';
import logo from './logo.svg'

const Header = () => {
    return (
        <header className="header">
            <span>RSUE</span>
            <img src={logo} alt="logo"></img>
            <span>RSUE</span>
            <img src={logo} alt="logo"></img>
            <span>RSUE</span>
            <img src={logo} alt="logo"></img>
            <span>RSUE</span>
            <img src={logo} alt="logo"></img>
            <span>RSUE</span>
        </header>
    );
};

export default Header;