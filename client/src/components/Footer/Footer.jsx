import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">
      <Link className="contact-link" to="/contact">
        Contact Us!
      </Link>
    </nav>
  );
}

export default Footer;
