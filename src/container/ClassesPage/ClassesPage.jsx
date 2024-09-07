import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ClassesPage.css";
import images from "../../constants/images";
import { Beethoven_Sonata_op_13, violin_classes } from "../../constants";
import Modal from "../Modal/Modal";
import "@fortawesome/fontawesome-free/css/all.min.css";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>;

const ClassesPage = () => {
  const pianoRef = useRef(null);
  const violinRef = useRef(null);
  const ukuleleRef = useRef(null);
  const celloRef = useRef(null);
  const location = useLocation();
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [isPianoFlipped, setPianoFlipped] = useState(false);
  const [isViolinFlipped, setViolinFlipped] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isHiding, setIsHiding] = useState(false);
  const [isPianoPlaying, setPianoPlaying] = useState(false);
  const [isViolinPlaying, setViolinPlaying] = useState(false);
  const audioPiano = useRef(new Audio(Beethoven_Sonata_op_13)).current;
  const audioViolin = useRef(new Audio(violin_classes)).current;

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
        piano: pianoRef.current,
        violin: violinRef.current,
        ukulele: ukuleleRef.current,
        cello: celloRef.current,
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
        // Ensure audio play is triggered by a user interaction
        try {
          audio.play();
        } catch (error) {
          console.error("Audio playback failed:", error);
        }
      }
    };
  };
  const handleMouseLeave = (audio, setFlipped) => {
    return (event) => {
      const card = event.currentTarget.closest(".flip_card");
      if (!isMobileDevice()) {
        card.classList.remove("hover");
        setFlipped(false);
        audio.pause();
        audio.currentTime = 0;
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
          audio.pause();
          audio.currentTime = 0;
        } else {
          card.classList.add("hover");
          setFlipped(true);
          audio.play();
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

  const handlePlayPause = (audio, isPlaying, setIsPlaying) => {
    return () => {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    };
  };

  return (
    <div className="classes_page_section">
      <div id="piano" ref={pianoRef} className="classes_block">
        <div className="headtext_cormorant_program">
          <h1 className="headtext_program">Уроци</h1>
          <h3 className="headtext_program_subtext"></h3>
        </div>
        <div className="all">
          {" "}
          <div className="content">
            <div className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <h1 className="instrument_text">Пиано</h1>
                  <img
                    className="classes_img"
                    src={images.pianoclass}
                    alt="Front Image"
                    onMouseEnter={handleMouseEnter(audioPiano, setPianoFlipped)}
                    onMouseLeave={handleMouseLeave(audioPiano, setPianoFlipped)}
                    onClick={handleClick(
                      audioPiano,
                      isPianoFlipped,
                      setPianoFlipped
                    )}
                  />
                </div>
                <div className="flip_card_back">
                  <div className="headtext_cormorant_classes">
                    <h1 className="subtext_program">Уроци по пиано</h1>
                  </div>
                  <div className="flip_card_back_content">
                    <img
                      className="classes_img1"
                      src={images.piano_classes_boy_playing}
                      alt="Back Image"
                      onMouseEnter={handleMouseEnter(
                        audioPiano,
                        setPianoFlipped
                      )}
                      onMouseLeave={handleMouseLeave(
                        audioPiano,
                        setPianoFlipped
                      )}
                      onClick={handleClick(
                        audioPiano,
                        isPianoFlipped,
                        setPianoFlipped
                      )}
                    />
                    <div className="play_pause_container">
                      <button
                        className="play_pause"
                        onClick={handlePlayPause(
                          audioPiano,
                          isPianoPlaying,
                          setPianoPlaying
                        )}
                      >
                        <i
                          className={`fas ${
                            isPianoPlaying ? "fa-pause" : "fa-play"
                          }`}
                        ></i>
                      </button>
                    </div>
                  </div>
                  <div className="button_classes_flip_card">
                    <button
                      onClick={() =>
                        handleButtonClick({
                          content: `Предлагаме индивидуални уроци по пиано, цигулка, виолончело, укулеле или солфеж и теория на музиката. Подходът е индивидуален и интерактивен, като се набляга правилна постановка на тялото и нотна грамотност, чрез изучаване на пиеси, които са приятни и разпознаваеми за детето. Винаги взимаме предвид лични предпочитания и любими мелодии на изучаващия се. Работим с екип от млади професионалисти заредени със знания и опит, готови да предадат наученото с желание и позитивизъм. Времетраенето на един урок варира спрямо нуждите на учащия се. Те могат да бъдат 30мин, 45мин или 1 астрономически час. Всички индивидуални уроци могат да се взимат и под формата на онлайн обучение.Редовно се организират концерти и участия за децата, за да могат да изразят таланта си пред други хора и да черпят от ползите, които сцената дава.`,

                          image: images.pianoclass,
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
          <div id="violin" ref={violinRef} className="classes_block">
            <div className="content">
              <div className="flip_card">
                <div className="flip_card_inner">
                  <div className="flip_card_front">
                    <h1 className="instrument_text">Цигулка</h1>
                    <img
                      className="classes_img"
                      src={images.violinclass}
                      alt="Front Image"
                      onMouseEnter={handleMouseEnter(
                        audioViolin,
                        setViolinFlipped
                      )}
                      onMouseLeave={handleMouseLeave(
                        audioViolin,
                        setViolinFlipped
                      )}
                      onClick={handleClick(
                        audioViolin,
                        isViolinFlipped,
                        setViolinFlipped
                      )}
                    />
                  </div>
                  <div className="flip_card_back">
                    <div className="headtext_cormorant_classes">
                      <h1 className="subtext_program">Уроци по цигулка</h1>
                    </div>
                    <img
                      className="classes_img1"
                      src={images.violin_classes_girl_playing}
                      alt="Back Image"
                      onMouseEnter={handleMouseEnter(
                        audioViolin,
                        setViolinFlipped
                      )}
                      onMouseLeave={handleMouseLeave(
                        audioViolin,
                        setViolinFlipped
                      )}
                      onClick={handleClick(
                        audioViolin,
                        isViolinFlipped,
                        setViolinFlipped
                      )}
                    />
                    <div className="play_pause_container">
                      <button
                        className="play_pause"
                        onClick={handlePlayPause(
                          audioViolin,
                          isViolinPlaying,
                          setViolinPlaying
                        )}
                      >
                        <i
                          className={`fas ${
                            isViolinPlaying ? "fa-pause" : "fa-play"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <div className="button_classes_flip_card">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            content: `Предлагаме индивидуални уроци по пиано, цигулка, виолончело, укулеле или солфеж и теория на музиката. Подходът е индивидуален и интерактивен, като се набляга правилна постановка на тялото и нотна грамотност, чрез изучаване на пиеси, които са приятни и разпознаваеми за детето. Винаги взимаме предвид лични предпочитания и любими мелодии на изучаващия се. Работим с екип от млади професионалисти заредени със знания и опит, готови да предадат наученото с желание и позитивизъм. Времетраенето на един урок варира спрямо нуждите на учащия се. Те могат да бъдат 30мин, 45мин или 1 астрономически час. Всички индивидуални уроци могат да се взимат и под формата на онлайн обучение.Редовно се организират концерти и участия за децата, за да могат да изразят таланта си пред други хора и да черпят от ползите, които сцената дава.`,
                            image: images.violaclasses,
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
          <div id="violin" ref={violinRef} className="classes_block">
            <div className="content">
              <div className="flip_card">
                <div className="flip_card_inner">
                  <div className="flip_card_front">
                    <h1 className="instrument_text">Виола</h1>
                    <img
                      className="classes_img"
                      src={images.violaclasses}
                      alt="Front Image"
                      onMouseEnter={handleMouseEnter(
                        audioViolin,
                        setViolinFlipped
                      )}
                      onMouseLeave={handleMouseLeave(
                        audioViolin,
                        setViolinFlipped
                      )}
                      onClick={handleClick(
                        audioViolin,
                        isViolinFlipped,
                        setViolinFlipped
                      )}
                    />
                  </div>
                  <div className="flip_card_back">
                    <div className="headtext_cormorant_classes">
                      <h1 className="subtext_program">Уроци по виола</h1>
                    </div>
                    <img
                      className="classes_img1"
                      src={images.violin_classes_girl_playing}
                      alt="Back Image"
                      onMouseEnter={handleMouseEnter(
                        audioViolin,
                        setViolinFlipped
                      )}
                      onMouseLeave={handleMouseLeave(
                        audioViolin,
                        setViolinFlipped
                      )}
                      onClick={handleClick(
                        audioViolin,
                        isViolinFlipped,
                        setViolinFlipped
                      )}
                    />
                    <div className="play_pause_container">
                      <button
                        className="play_pause"
                        onClick={handlePlayPause(
                          audioPiano,
                          isPianoPlaying,
                          setPianoPlaying
                        )}
                      >
                        <i
                          className={`fas ${
                            isPianoPlaying ? "fa-pause" : "fa-play"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <div className="button_classes_flip_card">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            content: `Предлагаме индивидуални уроци по пиано, цигулка, виолончело, укулеле или солфеж и теория на музиката. Подходът е индивидуален и интерактивен, като се набляга правилна постановка на тялото и нотна грамотност, чрез изучаване на пиеси, които са приятни и разпознаваеми за детето. Винаги взимаме предвид лични предпочитания и любими мелодии на изучаващия се. Работим с екип от млади професионалисти заредени със знания и опит, готови да предадат наученото с желание и позитивизъм. Времетраенето на един урок варира спрямо нуждите на учащия се. Те могат да бъдат 30мин, 45мин или 1 астрономически час. Всички индивидуални уроци могат да се взимат и под формата на онлайн обучение.Редовно се организират концерти и участия за децата, за да могат да изразят таланта си пред други хора и да черпят от ползите, които сцената дава.`,
                            image: images.violaclasses,
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
          <div id="ukulele" ref={ukuleleRef} className="classes_block">
            <div className="content">
              <div className="flip_card">
                <div className="flip_card_inner">
                  <div className="flip_card_front">
                    <h1 className="instrument_text">Укулеле</h1>
                    <img
                      className="classes_img"
                      src={images.ukuleleclass}
                      alt="Front Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div className="flip_card_back">
                    <div className="headtext_cormorant_classes">
                      <h1 className="subtext_program">Уроци по укулеле</h1>
                    </div>
                    <img
                      className="classes_img1"
                      src={images.bg_10}
                      alt="Back Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                    <div className="play_pause_container">
                      <button
                        className="play_pause"
                        onClick={handlePlayPause(
                          audioPiano,
                          isPianoPlaying,
                          setPianoPlaying
                        )}
                      >
                        <i
                          className={`fas ${
                            isPianoPlaying ? "fa-pause" : "fa-play"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <div className="button_classes_flip_card">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            content: `Предлагаме индивидуални уроци по пиано, цигулка, виолончело, укулеле или солфеж и теория на музиката. Подходът е индивидуален и интерактивен, като се набляга правилна постановка на тялото и нотна грамотност, чрез изучаване на пиеси, които са приятни и разпознаваеми за детето. Винаги взимаме предвид лични предпочитания и любими мелодии на изучаващия се. Работим с екип от млади професионалисти заредени със знания и опит, готови да предадат наученото с желание и позитивизъм. Времетраенето на един урок варира спрямо нуждите на учащия се. Те могат да бъдат 30мин, 45мин или 1 астрономически час. Всички индивидуални уроци могат да се взимат и под формата на онлайн обучение.Редовно се организират концерти и участия за децата, за да могат да изразят таланта си пред други хора и да черпят от ползите, които сцената дава.`,
                            image: images.ukuleleclass,
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
          <div id="cello" ref={celloRef} className="classes_block">
            <div className="content">
              <div className="flip_card">
                <div className="flip_card_inner">
                  <div className="flip_card_front">
                    <h1 className="instrument_text">Виолончело</h1>
                    <img
                      className="classes_img"
                      src={images.cheloclass}
                      alt="Front Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div className="flip_card_back">
                    <div className="headtext_cormorant_classes">
                      <h1 className="subtext_program">Уроци по виолончело</h1>
                    </div>
                    <img
                      className="classes_img1"
                      src={images.cello_classes_girl_playing}
                      alt="Back Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                    <div className="play_pause_container">
                      <button
                        className="play_pause"
                        onClick={handlePlayPause(
                          audioPiano,
                          isPianoPlaying,
                          setPianoPlaying
                        )}
                      >
                        <i
                          className={`fas ${
                            isPianoPlaying ? "fa-pause" : "fa-play"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <div className="button_classes_flip_card">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            content: `Предлагаме индивидуални уроци по пиано, цигулка, виолончело, укулеле или солфеж и теория на музиката. Подходът е индивидуален и интерактивен, като се набляга правилна постановка на тялото и нотна грамотност, чрез изучаване на пиеси, които са приятни и разпознаваеми за детето. Винаги взимаме предвид лични предпочитания и любими мелодии на изучаващия се. Работим с екип от млади професионалисти заредени със знания и опит, готови да предадат наученото с желание и позитивизъм. Времетраенето на един урок варира спрямо нуждите на учащия се. Те могат да бъдат 30мин, 45мин или 1 астрономически час. Всички индивидуални уроци могат да се взимат и под формата на онлайн обучение.Редовно се организират концерти и участия за децата, за да могат да изразят таланта си пред други хора и да черпят от ползите, които сцената дава.`,
                            image: images.cheloclass,
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
          <div id="solfej" className="classes_block">
            <div className="content">
              <div className="flip_card">
                <div className="flip_card_inner">
                  <div className="flip_card_front">
                    <h1 className="instrument_text_solfej">
                      Солфеж и теория на музиката
                    </h1>
                    <img
                      className="classes_img"
                      src={images.solfej}
                      alt="Front Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div className="flip_card_back">
                    <div className="headtext_cormorant_classes">
                      <h1 className="subtext_program_solfej">Уроци</h1>
                    </div>
                    <img
                      className="classes_img1"
                      src={images.solfej_bg}
                      alt="Back Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                    <div className="play_pause_container">
                      <button
                        className="play_pause"
                        onClick={handlePlayPause(
                          audioPiano,
                          isPianoPlaying,
                          setPianoPlaying
                        )}
                      >
                        <i
                          className={`fas ${
                            isPianoPlaying ? "fa-pause" : "fa-play"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <div className="button_classes_flip_card">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            content: `Разбирайки значимоста това да знаеш какво се случва в музиката и на нотния лист предлагаме и уроци по Солфеж и теория на музиката. По лесен и достъпен начин се формират знания за точната наука зад изкуството и нейните елементи, даващи по-голямата яснота и свобода за интерпретиране и навлизане в музикалния свят. Работим с екип от млади професионалисти заредени със знания и опит, готови да предадат наученото с желание и позитивизъм. Времетраенето на един урок варира спрямо нуждите на учащия се. Те могат да бъдат 30мин, 45мин или 1 астрономически час. Всички индивидуални уроци могат да се взимат и под формата на онлайн обучение.`,
                            image: images.solfej,
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
          <div id="musical_mix" className="classes_block">
            <div className="content">
              <div className="flip_card">
                <div className="flip_card_inner">
                  <div className="flip_card_front">
                    <h1 className="instrument_text">Музикален микс</h1>
                    <img
                      className="classes_img"
                      src={images.mix}
                      alt="Front Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div className="flip_card_back">
                    <div className="headtext_cormorant_classes">
                      <h1 className="subtext_program">Уроци</h1>
                    </div>
                    <img
                      className="classes_img1"
                      src={images.solfej_bg}
                      alt="Back Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />

                    <div className="button_classes_flip_card">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            content: `Разбирайки значимоста това да знаеш какво се случва в музиката и на нотния лист предлагаме и уроци по Солфеж и теория на музиката. По лесен и достъпен начин се формират знания за точната наука зад изкуството и нейните елементи, даващи по-голямата яснота и свобода за интерпретиране и навлизане в музикалния свят. Работим с екип от млади професионалисти заредени със знания и опит, готови да предадат наученото с желание и позитивизъм. Времетраенето на един урок варира спрямо нуждите на учащия се. Те могат да бъдат 30мин, 45мин или 1 астрономически час. Всички индивидуални уроци могат да се взимат и под формата на онлайн обучение.`,
                            image: images.mix,
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
          <div id="online" className="classes_block">
            <div className="content">
              <div className="flip_card">
                <div className="flip_card_inner">
                  <div className="flip_card_front">
                    <h1 className="instrument_text">Онлайн уроци</h1>
                    <img
                      className="classes_img"
                      src={images.online}
                      alt="Front Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <div className="flip_card_back">
                    <div className="headtext_cormorant_classes">
                      <h1 className="subtext_program">Уроци</h1>
                    </div>
                    <img
                      className="classes_img1"
                      src={images.solfej_bg}
                      alt="Back Image"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />

                    <div className="button_classes_flip_card">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            content: `В забързаното ежедневие днес все по-малко намираме време за нещата, които искаме да правим или научим. Нещата, които ни правят щастливи. Затова ние предлагаме варианта всички индивидуални уроци да могат да бъдат взети и онлайн в удобно за Вас време в удобството на собствения Ви дом!`,
                            image: images.online,
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
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
