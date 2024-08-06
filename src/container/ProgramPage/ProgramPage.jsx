import React, { useEffect } from "react";
import "./ProgramPage.css";
import images from "../../constants/images";

const ProgramPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="program_page_section">
      <div className="program_block">
        <div className="headtext_cormorant_program">
          <h1 className="headtext_program">Занималня</h1>
        </div>
        <div className="content_with_image_program">
          <div className="program_text">
            <div className="headtext_cormorant_program">
              <h1 className="subtext_program">Следобедна Занималня</h1>
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
            <button className="sign_up_program">
              <a href="/Contact">Запиши се сега</a>
            </button>
          </div>
          <div className="program_images">
            <img className="program_img" src={images.program} alt="" />
            <img className="program_img2" src={images.program2} alt="" />
          </div>
        </div>
        <div className="muzieknootjes">
          <div className="noot-1">&#9835; &#9833;</div>
          <div className="noot-2">&#9833;</div>
          <div className="noot-3">&#9839; &#9834;</div>
          <div className="noot-4">&#9834;</div>
        </div>
      </div>

      <div className="program_block">
        <div className="content_with_image_program">
          <div className="program_images">
            <img className="program_img3" src={images.program3} alt="" />
            <img className="program_img4" src={images.program4} alt="" />
          </div>
          <div className="program_text">
            <div className="headtext_cormorant_program">
              <h1 className="subtext_program">Лятна Занималня</h1>
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
            <button className="sign_up_program">
              <a href="/Contact">Запиши се сега</a>
            </button>
          </div>
        </div>
        <div className="muzieknootjes">
          <div className="noot-1">&#9835; &#9833;</div>
          <div className="noot-2">&#9833;</div>
          <div className="noot-3">&#9839; &#9834;</div>
          <div className="noot-4">&#9834;</div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
