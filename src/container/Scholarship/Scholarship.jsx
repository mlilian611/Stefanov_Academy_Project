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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
            fringilla sem diam, eget scelerisque quam vehicula sit amet. Nulla
            nec erat eu diam tempor cursus. Donec tincidunt lobortis felis, in
            mattis urna efficitur at. Morbi congue, lorem et condimentum
            sollicitudin, massa augue malesuada velit, ut fringilla nisi massa a
            erat. Nam nisi ex, tincidunt sit amet pharetra sit amet,
            pellentesque ac diam. Phasellus pretium ut justo eget congue.
            Praesent vitae ornare lectus. Nunc non orci at tortor pretium
            ullamcorper. Cras porttitor eget nisl ut consequat. Ut nunc enim,
            posuere id mollis eget, pharetra vitae massa. Nunc leo odio,
            porttitor in convallis nec, finibus vehicula libero. Praesent
            sagittis posuere mauris, ut porta arcu imperdiet nec. Curabitur
            vestibulum pellentesque lobortis. Suspendisse lacus nibh, varius
            eget tellus quis, vulputate vehicula elit.
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
