import React from "react";
import {Link} from "react-router-dom";
import "../styles/navbar.css";
import "../styles/footer.css"


export default function Footer() {
    return (
        <>
            <footer className="footer bg-custom text-light py-4">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <span className="footer-text">&copy; {new Date().getFullYear()} Vet Secure</span>
                </div>
            </footer>
        </>
    );
}