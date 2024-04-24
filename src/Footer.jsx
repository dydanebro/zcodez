import React from "react";
import logo from './assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer d-flex align-items-center justify-content-center bg-dark text-white text-center w-100%">
            <img src={logo} alt="codez logo" className="h-50 me-3" />
            <p>copyright © 2024</p>
        </footer>
    )
}

export default Footer;
