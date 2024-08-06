import React, { useEffect } from "react";
import "./NewsPage.css";
import images from "../../constants/images";

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="news_page_section">
      <div className="news_block">
        <div className="headtext_cormorant_news">
          <h1 className="headtext_news">Събития</h1>
        </div>
        <div className="content_with_image">
          <div className="news_images">
            <img
              className="news_img"
              src={images.piano_classes_boy_playing}
              alt=""
            />
          </div>
          <div className="news_text">
            <div className="headtext_cormorant_news">
              <h1 className="headtext">Събитие 1</h1>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
              fringilla sem diam, eget scelerisque quam vehicula sit amet. Nulla
              nec erat eu diam tempor cursus. Donec tincidunt lobortis felis, in
              mattis urna efficitur at.
            </p>
          </div>
        </div>
      </div>

      <div className="news_block">
        <div className="content_with_image">
          <div className="news_images">
            <img
              className="news_img"
              src={images.cello_classes_girl_playing}
              alt=""
            />
          </div>
          <div className="news_text">
            <div className="headtext_cormorant_news">
              <h1 className="headtext">Събитие 2</h1>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
              fringilla sem diam, eget scelerisque quam vehicula sit amet. Nulla
              nec erat eu diam tempor cursus. Donec tincidunt lobortis felis, in
              mattis urna efficitur at. Morbi congue, lorem et condimentum
              sollicitudin, massa augue malesuada velit, ut fringilla nisi massa
              a erat. Nam nisi ex, tincidunt sit amet pharetra sit amet,
              pellentesque ac diam.
            </p>
          </div>
        </div>
      </div>
      <div className="news_block">
        <div className="content_with_image">
          <div className="news_images">
            <img
              className="news_img"
              src={images.piano_classes_girl_playing}
              alt=""
            />
          </div>
          <div className="news_text">
            <div className="headtext_cormorant_news">
              <h1 className="headtext">Събитие 3</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
              fringilla sem diam, eget scelerisque quam vehicula sit amet. Nulla
              nec erat eu diam tempor cursus. Donec tincidunt lobortis felis, in
              mattis urna efficitur at. Morbi congue, lorem et condimentum
              sollicitudin, massa augue malesuada velit, ut fringilla nisi massa
              a erat. Nam nisi ex, tincidunt sit amet pharetra sit amet,
              pellentesque ac diam.
            </p>
          </div>
        </div>
      </div>
      <div className="news_block">
        <div className="content_with_image">
          <div className="news_images">
            <img
              className="news_img"
              src={images.violin_classes_girl_playing}
              alt=""
            />
          </div>
          <div className="news_text">
            <div className="headtext_cormorant_news">
              <h1 className="headtext">Събитие 4</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
              fringilla sem diam, eget scelerisque quam vehicula sit amet. Nulla
              nec erat eu diam tempor cursus. Donec tincidunt lobortis felis, in
              mattis urna efficitur at. Morbi congue, lorem et condimentum
              sollicitudin, massa augue malesuada velit, ut fringilla nisi massa
              a erat. Nam nisi ex, tincidunt sit amet pharetra sit amet,
              pellentesque ac diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
