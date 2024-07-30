import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.stefanov} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/home">Начало</Link>
        </li>
        <li className="p__opensans">
          <Link to="/programpage">Занималня</Link>
        </li>
        <li className="p__opensans">
          <Link to="/classespage">Уроци</Link>
        </li>
        <li className="p__opensans">
          <Link to="/scholarshippage">Стипендии</Link>
        </li>
        <li className="p__opensans">
          <Link to="/about-us">За нас</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contact">Контакти</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans"></a>
        <div />
        <a href="/" className="p__opensans"></a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={29}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <Link to="/home" onClick={() => setToggleMenu(false)}>
                  Начало
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="/programpage" onClick={() => setToggleMenu(false)}>
                  Занималня
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="/classespage" onClick={() => setToggleMenu(false)}>
                  Уроци
                </Link>
              </li>
              <li className="p__opensans">
                <Link
                  to="/scholarshippage"
                  onClick={() => setToggleMenu(false)}
                >
                  Стипендии
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="/about-us" onClick={() => setToggleMenu(false)}>
                  За нас
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="/contact" onClick={() => setToggleMenu(false)}>
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
