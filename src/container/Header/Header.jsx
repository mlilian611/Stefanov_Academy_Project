import React from "react";
import { images } from "../../constants";
import Divider from "../Divider/Divider";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div
        className="app__header app__wrapper section__padding"
        id="background"
        style={{
          backgroundImage: `url(${images.stefanov_banner})`,
          width: "100%",
          opacity: "0.9",
          justifyContent: "center",
          position: "relative", // Ensure proper positioning of the cursor
        }}
      ></div>
      <Divider />
    </>
  );
};

export default Header;
