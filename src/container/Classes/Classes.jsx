import React from "react";
import "./Classes.css";
import images from "../../constants/images";

const Classes = () => {
  return (
    <div className="classes_section">
      <div className="headtext__cormorant_classes">
        <h1 className="headtext">Уроци</h1>
      </div>
      <div className="classes">
        <div className="classes_item click-btn">
          <button className="classes_button">
            <img src={images.pianoclass} alt="pianoclass" />
          </button>
          <h2>Пиано</h2>
        </div>
        <div className="classes_item">
          <button className="classes_button">
            <img src={images.violinclass} alt="violinclass" />
          </button>
          <h2>Цигулка</h2>
        </div>
        <div className="classes_item">
          <button className="classes_button">
            <img src={images.ukeleleclass} alt="ukeleleclass" />
          </button>
          <h2>Укулеле</h2>
        </div>
        <div className="classes_item">
          <button className="classes_button">
            <img src={images.cheloclass} alt="cheloclass" />
          </button>
          <h2>Виолончело</h2>
        </div>
      </div>
    </div>
  );
};

export default Classes;
