import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
            Voting App
        </p>
        <p className="text-center">
              &copy; {new Date().getFullYear()} Your Voting App | All Rights Reserved
            </p>
      </div>
    </div>
  </>
);

export default Footer;
