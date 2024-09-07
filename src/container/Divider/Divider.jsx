import React, { useEffect } from "react";
import "./Divider.css";

const Divider = () => {
  useEffect(() => {
    const content = document.querySelector(".divider__content");
    content.classList.add("loaded");
  }, []);
  return (
    <div className="divider">
      <span className="divider__content">
        <p className="quote">"Където думите се провалят, говори музиката."</p>
        <p className="quoted">Ханс Кристиан Андерсен</p>
      </span>
    </div>
  );
};

export default Divider;
