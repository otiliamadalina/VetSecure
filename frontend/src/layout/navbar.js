import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="container-fluid d-flex justify-content-start align-items-center">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/VetSecure-Logo-White.png" alt="VetSecure Logo" className="navbar-logo" />
                </Link>
            </div>

        </nav>

    );

}