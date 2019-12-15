import React from "react";
import "./advantages-card.scss";

const AdvantagesCard = ({img, title, desc}) => {
  return (
    <div className="advantages-card text-center">
      <img src={img} alt="img" />
      <h2 className="advantages-title">{title}</h2>
      <p className="advantages-dexcription">{desc}</p>
    </div>
  );
};

export default AdvantagesCard;
