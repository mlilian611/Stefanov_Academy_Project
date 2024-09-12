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

        <p className="p__opensans">
          <a
            href="tel:+359 894301301 "
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "+359 894301301 ";
            }}
          >
            +359 894301301
          </a>
        </p>
        <p className="p__opensans email">
          <a
            href="mailto: stefanov.music.house@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "stefanov.music.house@gmail.com";
            }}
          >
            stefanov.music.house@gmail.com
          </a>
        </p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.stefanov} alt="footer_logo" />
        <p className="p__opensans_quote">
          &quot;"Музиката е по-възвишено откоровение от всяка мъдрост и
          философия."&quot;
        </p>
        <p className="p__opensans_author">Лудвиг Ван Бетовен</p>
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
        <p className="p__opensans">08:00 - 21:00 </p>
        <p className="p__opensans">Събота - Неделя:</p>
        <p className="p__opensans">10:00 - 20:00 </p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2024 Stefanov Music House. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
