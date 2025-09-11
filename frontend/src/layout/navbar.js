import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "../styles/navbar.css";
import "../styles/main.css";

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-logo-container">
                    <Link to="/">
                        <img src="/assets/VetSecure-Logo-Beige-Small.png" alt="Logo" className="navbar-logo"/>
                    </Link>
                </div>

                {/* Toggler pentru mobil */}
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Link-uri din dreapta */}
                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav nav-mobile-center mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link custom-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link custom-link" to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="btn nav-btn-register me-2" to="/register">Register</Link>
                        </li>

                        <li className="nav-item mt-2 mt-lg-0">
                            <Link className="btn nav-btn-login" to="/login">Login</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>

    );

}