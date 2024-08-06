import React from "react";
import "./News.css";
import NewsSlider from "../NewsSlider/NewsSlider";
import MusicDivider from "../MusicDivider/MusicDivider";

const News = () => {
  return (
    <>
      <MusicDivider />
      <div className="news_wrapper">
        <div className="headtext__cormorant_news">
          <h1 className="headtext_news_first_page">Събития</h1>
        </div>

        <div className="news_section">
          <NewsSlider />
        </div>
      </div>
    </>
  );
};

export default News;
