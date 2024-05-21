import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img className="logo" src="images/Logo A_full color.png" alt="Tim Dye Environmental Logo" />
      <div className="copyright">© 2024 TDEnviro. All rights reserved.</div>
      <div className="contact-info">Want a custom board? <a href="https://www.tdenviro.com/contact-us" target="_blank">Contact us!</a></div>
    </div>
  );
}

export default Footer;
