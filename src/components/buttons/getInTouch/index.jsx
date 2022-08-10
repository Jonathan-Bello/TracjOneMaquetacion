import React from "react"
import { Link } from "gatsby"
import "../../../css/buttons.css"

const Button2Component = (props) => {

    return (
       
        <div className="getInTouchbutton">
            <Link href='https://wa.me/4046302188' className="buttonTextArea" target="_blank">{props.text}</Link>
        </div>
    )
}

export default Button2Component