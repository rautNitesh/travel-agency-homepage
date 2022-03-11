import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer_quick-links">
          <h3 className="footer-head">Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_company">
          <h3 className="footer-head">Company</h3>
          <ul>
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
