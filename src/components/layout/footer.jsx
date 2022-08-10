import * as React from "react";
import Button from "../buttons/phone/index";
import Phone from "../../images/home/Phone.png";
import "../../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="">
          <h3 className="s-center">Looking to connect?</h3>
          <p>
            I respond faster via text. You probably do too. Let’s not waste any
            more time.
          </p>
          <div className="footer__buttonContainer">
            <Button text="404 630-2188" image={Phone} />
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <p>© Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
