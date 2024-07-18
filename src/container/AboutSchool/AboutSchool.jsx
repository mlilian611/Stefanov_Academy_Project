import React, { useRef } from "react";
import "./AboutSchool.css";
import MusicDivider from "../MusicDivider/MusicDivider";

const AboutSchool = () => {
  const spanRef = useRef();
  return (
    <>
      <div>
        <div>
          <div className="headtext__cormorant_about_school">
            <h1 className="headtext_about_school title">Академия Стефанов</h1>
          </div>
          <div className="about_school">
            <span ref={spanRef} className="about_school_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
                fringilla sem diam, eget scelerisque quam vehicula sit amet.
                Nulla nec erat eu diam tempor cursus. Donec tincidunt lobortis
                felis, in mattis urna efficitur at. Morbi congue, lorem et
                condimentum sollicitudin, massa augue malesuada velit, ut
                fringilla nisi massa a erat. Nam nisi ex, tincidunt sit amet
                pharetra sit amet, pellentesque ac diam. Phasellus pretium ut
                justo eget congue. Praesent vitae ornare lectus. Nunc non orci
                at tortor pretium ullamcorper. Cras porttitor eget nisl ut
                consequat. Ut nunc enim, posuere id mollis eget, pharetra vitae
                massa. Nunc leo odio, porttitor in convallis nec, finibus
                vehicula libero. Praesent sagittis posuere mauris, ut porta arcu
                imperdiet nec. Curabitur vestibulum pellentesque lobortis.
                Suspendisse lacus nibh, varius eget tellus quis, vulputate
                vehicula elit.
              </p>
              <button className="button_about_school">
                <a href="/about-us">Опознай ни</a>
              </button>
            </span>
          </div>
        </div>
      </div>
      <MusicDivider />
    </>
  );
};

export default AboutSchool;
