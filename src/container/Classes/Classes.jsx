import React from "react";
import { useNavigate } from "react-router-dom";
import "./Classes.css";
import images from "../../constants/images";

const Classes = () => {
  const Navigate = useNavigate();

  const handleClick = (section) => {
    Navigate(`/classespage#${section}`);
  };
  return (
    <div className="classes_section">
      <div className="headtext__cormorant_classes">
        <h1 className="headtext_classes_first_page">Музикални Уроци</h1>
      </div>
      <div className="classes">
        <div className="classes_item click-btn">
          <button
            className="classes_button classes_button_piano"
            onClick={() => handleClick("piano")}
          >
            <img src={images.pianoclass} alt="pianoclass" />
          </button>
          <h2>Пиано</h2>
        </div>
        <div className="classes_item">
          <button
            className="classes_button classes_button_violin"
            onClick={() => handleClick("violin")}
          >
            <img src={images.violinclass} alt="violinclass" />
          </button>
          <h2>Цигулка</h2>
        </div>
        <div className="classes_item">
          <button
            className="classes_button classes_button_viola"
            onClick={() => handleClick("viola")}
          >
            <img src={images.violaclasses} alt="violaclasses" />
          </button>
          <h2>Виола</h2>
        </div>
        <div className="classes_item">
          <button
            className="classes_button classes_button_ukulele"
            onClick={() => handleClick("ukulele")}
          >
            <img src={images.ukuleleclass} alt="ukeleleclass" />
          </button>
          <h2>Укулеле</h2>
        </div>
        <div className="classes_item">
          <button
            className="classes_button chello classes_button_chello"
            onClick={() => handleClick("chelloclass")}
          >
            <img src={images.cheloclass} alt="cheloclass" />
          </button>
          <h2>Виолончело</h2>
        </div>
        <div className="classes_item">
          <button
            className="classes_button chello classes_button_solfej"
            onClick={() => handleClick("solfej")}
          >
            <img src={images.solfej} alt="solfej" />
          </button>
          <h2> Солфеж и теория на музиката</h2>
        </div>
        <div className="classes_item">
          <button
            className="classes_button chello classes_button_chello"
            onClick={() => handleClick("mix")}
          >
            <img src={images.mix} alt="mix" />
          </button>
          <h2>Музикален микс</h2>
        </div>
        <div className="classes_item">
          <button
            className="classes_button chello classes_button_chello"
            onClick={() => handleClick("online")}
          >
            <img src={images.online} alt="online" />
          </button>
          <h2> Онлайн уроци</h2>
        </div>
      </div>
    </div>
  );
};

export default Classes;
