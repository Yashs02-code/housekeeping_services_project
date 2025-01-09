// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="/images/logo.png" alt="Tiwari's Shield & Shine Logo" />
                <h2><b>Tiwari's Shield & Shine</b></h2>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/booking">Book Now</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
