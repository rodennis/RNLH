import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">

        <Link className="link" to="/contact">
         <button className="footer-contact" >Contact Us!</button>
        </Link>
    </nav>
  );
}

export default Footer;
