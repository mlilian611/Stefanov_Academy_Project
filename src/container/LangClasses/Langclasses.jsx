import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Langclasses.css";
import Modal from "../Modal/Modal";
import images from "../../constants/images";

import "@fortawesome/fontawesome-free/css/all.min.css";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>;

const Langclasses = () => {
  const englishRef = useRef(null);
  const italianRef = useRef(null);
  const location = useLocation();
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setIsUserInteracted(true);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = {
        english: englishRef.current,
        italian: italianRef.current,
      }[id];

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [location]);

  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const handleMouseEnter = (audio, setFlipped) => {
    return (event) => {
      const card = event.currentTarget.closest(".flip_card");
      if (!isMobileDevice() && !card.classList.contains("hover")) {
        card.classList.add("hover");
        setFlipped(true);
      }
    };
  };
  const handleMouseLeave = (audio, setFlipped) => {
    return (event) => {
      const card = event.currentTarget.closest(".flip_card");
      if (!isMobileDevice()) {
        card.classList.remove("hover");
        setFlipped(false);
      }
    };
  };

  const handleClick = (audio, isFlipped, setFlipped) => {
    return (event) => {
      const card = event.currentTarget.closest(".flip_card");
      if (isMobileDevice()) {
        if (isFlipped) {
          card.classList.remove("hover");
          setFlipped(false);
        } else {
          card.classList.add("hover");
          setFlipped(true);
        }
      }
    };
  };
  const handleButtonClick = (content) => {
    setModalContent(content);
    setModalVisible(true);
    document.body.classList.add("active-modal");
  };

  const closeModal = () => {
    setIsHiding(true);
    setTimeout(() => {
      setModalVisible(false);
      setIsHiding(false);
      document.body.classList.remove("active-modal");
    }, 300);
  };

  useEffect(() => {
    if (modalVisible) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modalVisible]);
  return (
    <div className="classes_page_section">
      <div id="english" ref={englishRef} className="classes_block">
        <div className="headtext_cormorant_program">
          <h1 className="headtext_program ">Езикови уроци</h1>
          <h3 className="headtext_program_subtext"></h3>
        </div>
        <div className="all">
          {" "}
          <div className="content">
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front ">
                  <h1 className="instrument_text ">Английски език</h1>
                  <img
                    className="classes_img lang_img"
                    src={images.english}
                    alt="Front Image"
                  />
                </div>
                <div className="flip_card_back">
                  <div className="headtext_cormorant_classes">
                    <h1 className="subtext_program">Уроци по английски език</h1>
                  </div>
                  <div className="flip_card_back_content">
                    <img
                      className="classes_img1 lang_img"
                      src={images.english}
                      alt="Back Image"
                    />
                    <div className="play_pause_container">
                      <button className="play_pause"></button>
                    </div>
                  </div>
                  <div className="button_classes_flip_card">
                    <button
                      onClick={() =>
                        handleButtonClick({
                          content: `Всеки знае важността от научаването на чужд език. На нас музикантите също не ни е убягнала и сме се погрижили да сформираме чуждоезикова паралелка водена от преподаватели, чиито език съответния е майчин. Така без излишно натоварване от граматични правила и куп домашни, под формата на игра или разговор ще можете практически да разгърнете знанията си.`,

                          image: images.english,
                        })
                      }
                    >
                      Научи повече
                    </button>
                    <div>
                      <button>
                        <a href="/Contact">Запиши се сега</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {modalVisible && (
              <>
                <div className="overlay" onClick={closeModal}></div>
                <Modal
                  isHiding={isHiding}
                  content={modalContent}
                  closeModal={closeModal}
                />
              </>
            )}
          </div>
          <div id="italian" ref={italianRef} className="classes_block">
            <div className="content">
              <div className="flip_card">
                <div className="flip_card_inner">
                  <div className="flip_card_front">
                    <h1 className="instrument_text lang_img_it">
                      Италиански език
                    </h1>
                    <img
                      className="classes_img lang_img"
                      src={images.italian}
                      alt="Front Image"
                    />
                  </div>
                  <div className="flip_card_back">
                    <div className="headtext_cormorant_classes">
                      <h1 className="subtext_program lang_img">
                        Уроци по италиански език
                      </h1>
                    </div>
                    <img
                      className="classes_img1 lang_img"
                      src={images.italian}
                      alt="Back Image"
                    />
                    <div className="play_pause_container">
                      <button className="play_pause"></button>
                    </div>
                    <div className="button_classes_flip_card">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            content: `Всеки знае важността от научаването на чужд език. На нас музикантите също не ни е убягнала и сме се погрижили да сформираме чуждоезикова паралелка водена от преподаватели, чиито език съответния е майчин. Така без излишно натоварване от граматични правила и куп домашни, под формата на игра или разговор ще можете практически да разгърнете знанията си.`,
                            image: images.italian,
                          })
                        }
                      >
                        Научи повече
                      </button>
                      <div>
                        <button>
                          <a href="/Contact">Запиши се сега</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalVisible && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <Modal
            isHiding={isHiding}
            content={modalContent}
            closeModal={closeModal}
          />
        </>
      )}
    </div>
  );
};

export default Langclasses;
