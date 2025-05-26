import React from "react";
import "./App.css";
import reactLogo from "./Images/logo192.png";

function Footer() {
  return (
    <div className="follow-section-footer">
      <h3>Made with</h3>
      <img
        style={{ height: "1.5rem", width: "1.5rem" }}
        src={reactLogo}
        alt="logo"
      />
    </div>
  );
}

export default Footer;
