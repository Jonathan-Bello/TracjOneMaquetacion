import React from "react";
import "../../../css/typography.css";
import "../../../css/cards.css";

const helpCard = (props) => {
  return (
    <div className="heplCard">
      <img className="s-py-2" src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default helpCard;
