import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <nav>
        <Link classname="contactNav" to="/contact">
          Contact Us!
        </Link>
      </nav>
    </div>
  );
}

export default Footer;
