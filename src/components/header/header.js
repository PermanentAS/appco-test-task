import React from "react";
import mobile from "./mobile.png";
import "./header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header container-fluid">
      <div className="container">
        <h2 className="logo">AppCo</h2>
        <div className="row">
          <div className="col-lg-8 info">
            <h1>
              <span>Brainstorming</span> for <br />
              desired perfect Usability
            </h1>
            <p>
              Our design projects are fresh and simple and will benefit <br />
              your business greatly. Learn more about our work!
            </p>
            <Link to="/users"><button>View Stats</button></Link>
          </div>
          <div className="col-lg-4 co  mt-5 align-items-center ">
            <img src={mobile}  className="mx-auto d-none d-sm-block d-block image" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
