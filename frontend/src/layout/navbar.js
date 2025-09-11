import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "../styles/navbar.css";
import "../styles/main.css";

export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <Link to="/">
                    <img src="/assets/VetSecure-Logo-Beige-Small.png" alt="Logo" className="navbar-logo" />
                </Link>
            </div>

        </nav>

    );

}