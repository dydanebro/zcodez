import React from "react";
import logo from './assets/logo.png';

const Footer = () => {
    return (
        <footer className="container-fluid footer row bg-dark text-light w-100 m-0">
            <div className="col-md-6 w-50 d-flex justify-content-center align-items-center">
                <img src={logo} alt="codez logo" className="me-3" style={{width: 70, height: 40}} />
                <p>copyright © 2024</p>
            </div>
            <div className="col-md-6 w-50 d-flex flex-column justify-content-center align-items-center mt-2">
                <p>Powered by <b>codeZ</b></p>
                <p>Created & developed by <b>Momo Wanko Zidane</b>.</p>
            </div>
        </footer>
    )
}

export default Footer;
