import * as React from "react";
import Button from "../buttons/phone/index";
import Phone from "../../images/home/Phone.png";
import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="upperDiv">
        <div className="upperContent">
          <h3>Looking to connect?</h3>
          <p>
            I respond faster via text. You probably do too. Let’s not waste any
            more time.
          </p>
          <Button text="404 630-2188" image={Phone} />
        </div>
      </div>
      <div className="lowerDiv">
        <p>© Copyright. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
