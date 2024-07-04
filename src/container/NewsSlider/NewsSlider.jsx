import React, { useEffect } from "react";
import "./NewsSlider.css";
import { images } from "../../constants";

const NewsSlider = () => {
  let imgsContainers;

  useEffect(() => {
    imgsContainers = document.getElementsByClassName("img_container");
    setup();
    setInterval(autoScroll, autoScrollInterval);

    return () => {
      // Cleanup function to clear the interval on component unmount
      clearInterval(autoScrollInterval);
    };
  }, []);

  let containerWidth;
  let imgsCount;
  let currentImgIndex = 0;
  let autoScrollEnabled = false;
  let autoScrollInterval = 3000;
  let autoScrollDir = 1;

  const setup = () => {
    containerWidth = document.getElementById("container").clientWidth;
    imgsCount = imgsContainers.length;

    for (let i = 0; i < imgsCount; i++) {
      let element = imgsContainers[i];
      let newLeftPos = containerWidth * i;
      element.style.left = newLeftPos + "px";
    }
  };

  const onLeftButton = () => {
    if (currentImgIndex > 0) {
      containerWidth = document.getElementById("container").clientWidth;
      currentImgIndex--;
      for (let i = 0; i < imgsCount; i++) {
        let element = imgsContainers[i];
        let newLeftPos = containerWidth * (i - currentImgIndex);
        element.style.left = newLeftPos + "px";
      }
    }
  };

  const onRightButton = () => {
    if (currentImgIndex < imgsCount - 1) {
      containerWidth = document.getElementById("container").clientWidth;
      currentImgIndex++;
      for (let i = 0; i < imgsCount; i++) {
        let element = imgsContainers[i];
        let newLeftPos = -containerWidth * (currentImgIndex - i);
        element.style.left = newLeftPos + "px";
      }
    }
  };

  const autoScroll = () => {
    if (!autoScrollEnabled) return;
    if (currentImgIndex === 0) autoScrollDir = 1;
    else if (currentImgIndex === imgsCount - 1) autoScrollDir = -1;

    if (autoScrollDir < 0) {
      containerWidth = document.getElementById("container").clientWidth;
      currentImgIndex--;
      for (let i = 0; i < imgsCount; i++) {
        let element = imgsContainers[i];
        let newLeftPos = containerWidth * (i - currentImgIndex);
        element.style.left = newLeftPos + "px";
      }
    } else {
      containerWidth = document.getElementById("container").clientWidth;
      currentImgIndex++;
      for (let i = 0; i < imgsCount; i++) {
        let element = imgsContainers[i];
        let newLeftPos = -containerWidth * (currentImgIndex - i);
        element.style.left = newLeftPos + "px";
      }
    }
  };

  return (
    <div id="container">
      <div id="inner_container">
        <div id="imgs_container">
          <div className="img_container">
            <img src={images.news} alt="" />
            <div className="img_text_overlay">
              <h1 className="news_title_image">Lore ipsum</h1>
              <h2 className="news_text">
                Lorem isum dolor sit amet, consectetur adipiscing elit. Duis
                interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
                fringilla sem
              </h2>
              <h3 className="news_date">22.06.2023 </h3>
              <button className="learn_more">Научи повече</button>
            </div>
          </div>
          <div className="img_container">
            <img src={images.news2} alt="" />
            <div className="img_text_overlay">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum c
            </div>
          </div>
          <div className="img_container">
            <img src={images.news3} alt="" />
            <div className="img_text_overlay">Text 3</div>
          </div>
        </div>
        <div id="overlay">
          <div
            id="left_button"
            className="overlay_button"
            onClick={onLeftButton}
          >
            {"<"}
          </div>
          <div
            id="right_button"
            className="overlay_button"
            onClick={onRightButton}
          >
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
