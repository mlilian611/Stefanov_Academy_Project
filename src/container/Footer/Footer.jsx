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
            Контакти
          </a>{" "}
        </h1>

        <p className="p__opensans">+359 88888888</p>
        <p className="p__opensans">+359 89898989</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.stefanov} alt="footer_logo" />
        <p className="p__opensans_quote">
          &quot;Music hath charms to soothe the savage beast, to soften rocks or
          bend a knotted oak.&quot;
        </p>

        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/profile.php?id=61554225843396"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook />
          </a>

          <a
            href="https://www.instagram.com/stefanov.music.house/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext"> Работни часове</h1>
        <p className="p__opensans">Понеделник - Петък:</p>
        <p className="p__opensans">08:00 - 12:00 </p>
        <p className="p__opensans">Събота - Неделя:</p>
        <p className="p__opensans">07:00 - 11:00 </p>
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
