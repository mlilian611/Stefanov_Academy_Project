import React, { useEffect } from "react";
import { images } from "../../constants";
import Divider from "../Divider/Divider";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const headerElement = document.querySelector(".app__header");

    if (isIOS) {
      headerElement.style.backgroundAttachment = "scroll";
    } else {
      headerElement.style.backgroundAttachment = "fixed";
    }

    const handleResize = () => {
      if (window.innerWidth <= 850) {
        headerElement.style.backgroundSize = "155%";
        headerElement.style.backgroundImage = `url(${images.stefanov_music_logo_1})`;
      } else if (window.innerWidth <= 600) {
        headerElement.style.backgroundSize = "100%";
        headerElement.style.backgroundImage = `url(${images.stefanov_music_logo_1})`;
      } else {
        headerElement.style.backgroundSize = "cover";
        headerElement.style.backgroundImage = `url(${images.stefanov_banner})`;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="app__header app__wrapper section__padding"
        id="background"
        style={{
          backgroundImage: `url(${images.stefanov_music_logo_1})`,
          width: "100%",
          opacity: "0.9",
          justifyContent: "center",
          position: "relative",
        }}
      ></div>
      <Divider />
    </>
  );
};

export default Header;
