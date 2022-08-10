import React from "react"
import { Link } from "gatsby"
import "../../../css/buttons.css"

const ButtonComponent = (props) => {

    return (
        // <div className="phoneButtonDiv"> 
        //     <div className="buttonContent">
        //         <img src={props.image} alt='icon' />
        //         <a href='https://api.whatsapp.com/send?phone=+4046302188'>{props.text}</a>
        //     </div>
            
        // </div>
        <div className="button">
            <Link href='https://wa.me/4046302188' target="_blank"><img src={props.image} alt='icon'/></Link>
            <Link href='https://wa.me/4046302188' className= "buttonText" target="_blank">{props.text}</Link>
        </div>
    )
}

export default ButtonComponent