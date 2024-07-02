import React from "react";
import "./Program.css";

const Program = () => {
  return (
    <div className="program_section">
      <div className="headtext__cormorant_program">
        <h1 className="headtext">Лятна Занималня</h1>
      </div>
      <div className="summer_program">
        <span className="summer_program_text">
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
            <a href="#contact">Научи повече</a>
          </button>
          <button className="sign_up">
            <a href="#contact">Запиши се сега</a>
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
