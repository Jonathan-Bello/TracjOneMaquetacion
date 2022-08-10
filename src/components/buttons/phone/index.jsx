import React from "react";
import { Link } from "gatsby";
import "../../../css/buttons.css";

const ButtonComponent = (props) => {
  return (
    <Link href="https://wa.me/4046302188" target="_blank" className="button--icon">
      <div>
        <img src={props.image} alt="icon" />
      </div>
      <div>{props.text}</div>
    </Link>
  );
};

export default ButtonComponent;
