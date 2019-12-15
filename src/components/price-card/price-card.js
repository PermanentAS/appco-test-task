import React from "react";
import "./price-card.scss";

const PriceCard = ({ price, img, title, desc }) => {
  return (
    <div className="price-card text-center">
      <h3>{title}</h3>
      <img src={img} alt="img" />
      <h2 className="price-title">{price}</h2>
      <ul>
        {desc.map((item, idx) => {
          return <li key={idx}>{item}</li>
        })}
      </ul>
      <button>Purchase now</button>
    </div>
  );
};

export default PriceCard;
