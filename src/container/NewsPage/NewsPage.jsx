import React, { useEffect, useState } from "react";
import "./NewsPage.css";
import images from "../../constants/images";

const NewsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 6; // Number of images in the carousel

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const totalImages1 = 12;

  const [currentIndex2, setCurrentIndex2] = useState(0);
  const totalImages2 = 13;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateCarousel = () => {
    const carouselImages = document.querySelector(".carousel-images");
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const updateCarousel1 = () => {
    const carouselImages1 = document.querySelector(".carousel-images-1");
    carouselImages1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
  };

  const updateCarousel2 = () => {
    const carouselImages2 = document.querySelector(".carousel-images-2");
    carouselImages2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
  };

  // Move to the previous image
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalImages - 1
    );
  };

  // Move to the next image
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : 0
    );
  };
  const handlePrevClick1 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalImages1 - 1
    );
  };

  // Move to the next image in the second carousel
  const handleNextClick1 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex < totalImages1 - 1 ? prevIndex + 1 : 0
    );
  };
  const handlePrevClick2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalImages2 - 1
    );
  };

  // Move to the next image in the second carousel
  const handleNextClick2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex < totalImages2 - 1 ? prevIndex + 1 : 0
    );
  };

  // Call updateCarousel every time currentIndex changes
  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  useEffect(() => {
    updateCarousel1();
  }, [currentIndex1]);
  useEffect(() => {
    updateCarousel2();
  }, [currentIndex2]);

  return (
    <div className="news_page_section">
      <div className="news_block">
        <div className="headtext_cormorant_news">
          <h1 className="headtext_news">Събития</h1>
        </div>
        <div className="content_with_image">
          <div className="carousel">
            <div className="carousel-images-1">
              <img src={images.jconcert} alt="Image 1" class="news_img" />
              <img src={images.jconcert1} alt="Image 2" class="news_img" />
              <img src={images.jconcert2} alt="Image 3" class="news_img" />
              <img src={images.jconcert3} alt="Image 4" class="news_img" />
              <img src={images.jconcert4} alt="Image 5" class="news_img" />
              <img src={images.jconcert5} alt="Image 6" class="news_img" />
              <img src={images.jconcert6} alt="Image 7" class="news_img" />
              <img src={images.jconcert7} alt="Image 8" class="news_img" />
              <img src={images.jconcert8} alt="Image 9" class="news_img" />
              <img src={images.jconcert9} alt="Image 10" class="news_img" />
              <img src={images.jconcert10} alt="Image 11" class="news_img" />
              <img src={images.jconcert11} alt="Image 12" class="news_img" />
            </div>
            <button className="carousel-prev" onClick={handlePrevClick1}>
              &#10094;
            </button>
            <button className="carousel-next" onClick={handleNextClick1}>
              &#10095;
            </button>
          </div>
          <div className="news_text">
            <div className="headtext_cormorant_news">
              <h1 className="subtext_program">Събитие 1</h1>
            </div>
            <p className="text_news">
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
          <div className="carousel">
            <div className="carousel-images">
              <img src={images.tchaikoivski} alt="Image 1" class="news_img" />
              <img src={images.tchaikoivski1} alt="Image 2" class="news_img" />
              <img src={images.tchaikoivsk2} alt="Image 3" class="news_img" />
              <img src={images.tchaikoivski3} alt="Image 4" class="news_img" />
              <img src={images.tchaikoivski4} alt="Image 5" class="news_img" />
              <img src={images.tchaikovski5} alt="Image 6" class="news_img" />
            </div>
            <button className="carousel-prev" onClick={handlePrevClick}>
              &#10094;
            </button>
            <button className="carousel-next" onClick={handleNextClick}>
              &#10095;
            </button>
          </div>
          <div className="news_text">
            <div className="headtext_cormorant_news">
              <h1 className="subtext_program">Събитие 2</h1>
            </div>
            <p className="text_news">
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
          <div className="carousel">
            <div className="carousel-images-2">
              <img src={images.dconcert} alt="Image 1" class="news_img" />
              <img src={images.dconcert1} alt="Image 2" class="news_img" />
              <img src={images.dconcert2} alt="Image 3" class="news_img" />
              <img src={images.dconcert3} alt="Image 4" class="news_img" />
              <img src={images.dconcert4} alt="Image 5" class="news_img" />
              <img src={images.dconcert5} alt="Image 6" class="news_img" />
              <img src={images.dconcert6} alt="Image 7" class="news_img" />
              <img src={images.dconcert7} alt="Image 8" class="news_img" />
              <img src={images.dconcert8} alt="Image 9" class="news_img" />
              <img src={images.dconcert9} alt="Image 10" class="news_img" />
              <img src={images.dconcert10} alt="Image 11" class="news_img" />
              <img src={images.dconcert11} alt="Image 12" class="news_img" />
              <img src={images.dconcert12} alt="Image 13" class="news_img" />
            </div>
            <button className="carousel-prev" onClick={handlePrevClick2}>
              &#10094;
            </button>
            <button className="carousel-next" onClick={handleNextClick2}>
              &#10095;
            </button>
          </div>
          <div className="news_text">
            <div className="headtext_cormorant_news">
              <h1 className="subtext_program">Събитие 2</h1>
            </div>
            <p className="text_news">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
              fringilla sem diam, eget scelerisque quam vehicula sit amet. Nulla
              nec erat eu diam tempor cursus. Donec tincidunt lobortis felis, in
              mattis urna efficitur at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
