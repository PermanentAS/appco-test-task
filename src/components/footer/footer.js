import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container ">
        <div className="subscribe d-flex justify-content-between align-items-center">
          <input type="text" placeholder="Enter your email"/>
          <button>Subscribe</button>
        </div>
        <div className="row d-flex justify-content-between align-items-center">
          <span className="logo">AppCo</span>
          <span>All rights reserved by ThemeTags</span>
          <span>Copyrights © 2019.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
