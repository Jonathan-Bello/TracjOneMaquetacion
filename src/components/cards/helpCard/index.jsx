import React from "react"
import "../../../css/typography.css"
import "../../../css/cards.css"

const helpCard = (props) => {

    return (
        <div className="helpCardContent">
            <img src={props.image}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default helpCard