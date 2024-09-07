import React from "react";
import "./Program.css";
import { Link } from "react-router-dom";

const Program = () => {
  return (
    <div className="program_section">
      <div className="headtext__cormorant_program">
        <h1 className="headtext_program_first_page">Занималня</h1>
      </div>
      <div className="summer_program">
        <span className="summer_program_text">
          <p>
            Ние от Stefanov Music House и екипът ни от млади професионалисти
            целим подобряване образователния процес на децата, като осигурим
            среда, в която лесно и приятно да се подготвят по учебен план, да
            създават приятелства, да се веселят и да разширят своя кръгозор в
            сферата на музиката и изкуството.
          </p>

          <button className="learn_more">
            <Link to="/programpage">Занимални</Link>
          </button>
          <button className="sign_up">
            <Link to="/contact">Запиши се сега</Link>
          </button>
          <div className="muzieknootjes">
            <div className="noot-1">&#9835; &#9833;</div>
            <div className="noot-2">&#9833;</div>
            <div className="noot-3">&#9839; &#9834;</div>
            <div className="noot-4">&#9834;</div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Program;
