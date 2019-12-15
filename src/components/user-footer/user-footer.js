import React from "react";
import "./user-footer.scss";

const UserHeader = () => {
  return (
    <div className="container-fluid user-footer">
      <div className="container text">
        <span className="logo">AppCo</span>
        <span>All rights reserved by ThemeTags</span>
        <span>Copyrights © 2019. </span>
      </div>
    </div>
  );
};

export default UserHeader;