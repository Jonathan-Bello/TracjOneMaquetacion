import React from "react";
import "../../../css/typography.css";
import Rectangle from "../../../images/home/cardRectangle.png";
import "../../../css/cards.css";

const whyCard = (props) => {
  return (
    <div className="whyCard">
      <div className="whyCard__Img s-mb-4">
        <img src={props.image} />
      </div>
      <div className="whyCard__Content">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default whyCard;
