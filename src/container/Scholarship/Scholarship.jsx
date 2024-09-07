import React from "react";
import "./Scholarship.css";

const Scholarship = () => {
  return (
    <div className="scholarship_section">
      <div className="headtext__cormorant_sholarship">
        <h1 className="headtext_scholarship_first_page">Стипендии</h1>
      </div>
      <div className="scholarship_text">
        <span className="scholarship_text_span">
          <p>
            В Stefanov Music House вярваме в подкрепата на младите таланти и
            искаме да направим музикалното обучение достъпно за всички, особено
            за деца в неравностойно положение. Ако желаете да разберете повече
            можете да го направите чрез натискане на бутона по-долу.
          </p>
          <button className="learn_more">
            <a href="/ScholarshipPage">Научи повече</a>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Scholarship;
