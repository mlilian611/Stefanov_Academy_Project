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
        <p className="quote">
          "To send light into the darkness of men's hearts - such is the duty of
          the artist."
        </p>
        <p className="quoted">Robert Schumann</p>
      </span>
    </div>
  );
};

export default Divider;
