import React from "react";
import AdvantagesCard from "./../advantages-card";
import firstImg from "./img/1.png"
import secondImg from "./img/2.png"
import thirdImg from "./img/3.png"

import "./advantages.scss";

const Advantages = () => {
  const data = [
    {
      img: firstImg,
      title: "Clean Design",
      desc: "Increase sales by showing true dynamics of your website."
    },
    {
      img: secondImg,
      title: "Secure Data",
      desc: "Build your online store’s trust using Social Proof & Urgency."
    },
    {
      img: thirdImg,
      title: "Retina Ready",
      desc:
        "Realize importance of social proof in customer’s purchase decision."
    }
  ];

  return (
    <div className="container advantages text-center">
      <h2 className="title">
        Why{" "}
        <span>
          small business owners <br />
          love
        </span>{" "}
        AppCo?
      </h2>
      <p className="description">
        Our design projects are fresh and simple and will benefit your business{" "}
        <br />
        greatly. Learn more about our work!
      </p>
      <div className="row justify-content-around">
        {data.map(({ img, title, desc }, idx) => (
          <AdvantagesCard img={img} title={title} desc={desc} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
