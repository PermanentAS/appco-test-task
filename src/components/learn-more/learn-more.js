import React from "react";
import image from "./img/macbook.png";
import "./learn-more.scss";

const LearnMore = () => {
  return (
    <div className="container-fluid learn-more">
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <h2 className="title">
              Start Managing your apps business, more faster
            </h2>
            <p className="description">
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition wireless customer service without
              goal-oriented catalysts for change. Collaboratively.
            </p>
            <button>Learn more</button>
          </div>
          <div className="col-sm-12 col-lg-7 image">
            <img src={image} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
