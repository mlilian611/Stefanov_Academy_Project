import React from "react";
import { useNavigate } from "react-router-dom";
import "./Langclasseshome.css";
import images from "../../constants/images";

const Langclasseshome = () => {
  const Navigate = useNavigate();

  const handleClick = (section) => {
    console.log(`Navigating to /classespage/langclasses#${section}`);
    Navigate(`/classespage/langclasses#${section}`);
  };
  return (
    <div className="classes_section">
      <div className="headtext__cormorant_classes">
        <h1 className="headtext_langclasses_first_page">Езикови Уроци</h1>
      </div>
      <div className="classes">
        <div className="classes_item click-btn">
          <button
            className="classes_button classes_button_piano"
            onClick={() => handleClick("english")}
          >
            <img src={images.english} alt="english" />
          </button>
          <h2>Пиано</h2>
        </div>
        <div className="classes_item">
          <button
            className="classes_button classes_button_violin"
            onClick={() => handleClick("italian")}
          >
            <img src={images.italian} alt="italian" />
          </button>
          <h2>Цигулка</h2>
        </div>
      </div>
    </div>
  );
};

export default Langclasseshome;
