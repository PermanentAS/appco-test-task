import React from "react";
import firstImg from "./img/1.png";
import secondImg from "./img/2.png";
import thirdImg from "./img/3.png";
import PriceCard from "./../price-card";

import "./price.scss";

const Price = () => {
  const data = [
    {
      price: "29$",
      img: firstImg,
      title: "Basic",
      desc: [
        "Push Notifications",
        "Data Transfer",
        "SQL Database",
        "Search & SEO Analytics",
        "24/7 Phone Support",
        "2 months technical support",
        "2+ profitable keyword"
      ]
    },
    {
      price: "149&",
      img: secondImg,
      title: "Standard",
      desc: [
        "Push Notifications",
        "Data Transfer",
        "SQL Database",
        "Search & SEO Analytics",
        "24/7 Phone Support",
        "2 months technical support",
        "2+ profitable keyword"
      ]
    },
    {
      price: "239$",
      img: thirdImg,
      title: "Unlimited",
      desc: [
        "Push Notifications",
        "Data Transfer",
        "SQL Database",
        "Search & SEO Analytics",
        "24/7 Phone Support",
        "2 months technical support",
        "2+ profitable keyword"
      ]
    }
  ];

  return (
    <div className="container-fluid price text-center">
      <div className="container ">
        <h2 className="title">
          <span>Afforadble Pricing and Packages</span> choose your best one
        </h2>
        <p className="description">
          Monotonectally grow strategic process improvements vis-a-vis
          integrated resources.
        </p>
        <div className="row justify-content-around">
          {data.map(({ price, img, title, desc }, idx) => (
            <PriceCard
              price={price}
              img={img}
              title={title}
              desc={desc}
              key={idx}
            />
          ))}
        </div>
        <div className="contact">
          <p>If you need custom services or Need more? <span>Contact us</span></p>
        </div>
      </div>
    </div>
  );
};

export default Price;
