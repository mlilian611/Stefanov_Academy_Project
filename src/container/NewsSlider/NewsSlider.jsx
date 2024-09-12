import React, { useEffect } from "react";
import "./NewsSlider.css";
import { images } from "../../constants";
import { Link } from "react-router-dom";

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
          <div className="img_container image_1">
            <img src={images.jconcert} alt="" />
            <div className="img_text_overlay">
              <button className="learn_more_news">
                <a href="/newspage">Научи повече</a>
              </button>
            </div>
          </div>
          <div className="img_container">
            <img src={images.tchaikoivski} alt="" />
            <div className="img_text_overlay">
              <button className="learn_more_news">
                <a href="/newspage">Научи повече</a>
              </button>
            </div>
          </div>
          <div className="img_container">
            <img src={images.dconcert} alt="" />
            <div className="img_text_overlay">
              <button className="learn_more_news">
                <a href="/newspage">Научи повече</a>
              </button>
            </div>
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
