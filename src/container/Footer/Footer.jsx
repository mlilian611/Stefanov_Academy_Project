import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">
          <a className="contact" href="#contact">
            Contact us
          </a>{" "}
        </h1>
        {/* <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p> */}
        <p className="p__opensans">+359 88888888</p>
        <p className="p__opensans">+359 89898989</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Music hath charms to soothe the savage beast, to soften rocks or
          bend a knotted oak.&quot;
        </p>

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext"> Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2024 Stefanov Music Academy. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
