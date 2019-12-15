import React from "react";
import "./breadcrumb.scss";
import { Link } from "react-router-dom";

const Breadcrumb = ({ data }) => {
  return (
    <ol className="breadcrumb">
      {data.map((item, idx) => {
        return (
          <li
            key={idx}
            className={`breadcrumb-item ${
              idx === data.length - 1 ? "active" : ""
            }`}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumb;
