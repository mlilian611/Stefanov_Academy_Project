import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Combined hover for both the parent and submenu
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/home">
          <img src={images.stefanov} alt="app logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/home">Начало</Link>
        </li>
        <li className="p__opensans">
          <Link to="/programpage">Занималня</Link>
        </li>
        <li
          className="p__opensans app__navbar-dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/classespage">Уроци</Link>
          {/* Dropdown Menu */}
          <ul
            className="app__navbar-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li className="p__opensans">
              <Link to="/classespage">Музикални Уроци</Link>
            </li>
            <li className="p__opensans">
              <Link to="/classespage/language-classes">Eзикови Уроци</Link>
            </li>
          </ul>
        </li>
        <li className="p__opensans">
          <Link to="/scholarshippage">Стипендии</Link>
        </li>
        <li className="p__opensans">
          <Link to="/newspage">Събития</Link>
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
            <FaTimes
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
                <ul className="app__navbar-smallscreen_dropdown">
                  <li className="p__opensans">
                    <Link to="/classespage/music-classes">Музикални Уроци</Link>
                  </li>
                  <li className="p__opensans">
                    <Link to="/classespage/language-classes">
                      Язикови Уроци
                    </Link>
                  </li>
                </ul>
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
                <Link to="/newspage" onClick={() => setToggleMenu(false)}>
                  Събития
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
