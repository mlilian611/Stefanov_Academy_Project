import React from "react";
import "./ScholarshipPage.css";
import { images } from "../../constants";

const ScholarshipPage = () => {
  return (
    <div>
      <div className="scholarship__section">
        <div className="scholarship__block">
          <div className="scholarship__text">
            <div className="headtext_cormorant_scholarship">
              <h1 className="headtext_scholarship">Стипендии</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
              fringilla sem diam, eget scelerisque quam vehicula sit amet. Nulla
              nec erat eu diam tempor cursus. Donec tincidunt lobortis felis, in
              mattis urna efficitur at. Morbi congue, lorem et condimentum
              sollicitudin, massa augue malesuada velit, ut fringilla nisi massa
              a erat. Nam nisi ex, tincidunt sit amet pharetra sit amet,
              pellentesque ac diam. Phasellus pretium ut justo eget congue.
              Praesent vitae ornare lectus. Nunc non orci at tortor pretium
              ullamcorper. Cras porttitor eget nisl ut consequat. Ut nunc enim,
              posuere id mollis eget, pharetra vitae massa. Nunc leo odio,
              porttitor in convallis nec, finibus vehicula libero. Praesent
              sagittis posuere mauris, ut porta arcu imperdiet nec. Curabitur
              vestibulum pellentesque lobortis. Suspendisse lacus nibh, varius
              eget tellus quis, vulputate vehicula elit.
            </p>
            <button className="sign_up_scholarship">
              <a href="/Contact">Пиши ни за повече информация</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;
