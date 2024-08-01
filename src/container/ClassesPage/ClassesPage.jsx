import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ClassesPage.css";
import images from "../../constants/images";
import { Beethoven_Sonata_op_13, violin_classes } from "../../constants";

const ClassesPage = () => {
  const pianoRef = useRef(null);
  const violinRef = useRef(null);
  const ukuleleRef = useRef(null);
  const celloRef = useRef(null);
  const location = useLocation();
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [isPianoFlipped, setPianoFlipped] = useState(false);
  const [isViolinFlipped, setViolinFlipped] = useState(false);

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
        audio.play();
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

  return (
    <div className="classes_page_section">
      <div id="piano" ref={pianoRef} className="classes_block">
        <div className="content">
          <div className="flip_card">
            <div className="flip_card_inner">
              <div className="flip_card_front">
                <img
                  className="classes_img"
                  src={images.PianoClasses}
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
                <img
                  className="classes_img1"
                  src={images.piano_classes_boy_playing}
                  alt="Back Image"
                  onMouseEnter={handleMouseEnter(audioPiano, setPianoFlipped)}
                  onMouseLeave={handleMouseLeave(audioPiano, setPianoFlipped)}
                  onClick={handleClick(
                    audioPiano,
                    isPianoFlipped,
                    setPianoFlipped
                  )}
                />
              </div>
            </div>
          </div>
          <div className="classes_text">
            <div className="headtext_cormorant_classes">
              <h1 className="headtext">Уроци по пиано</h1>
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
            <button className="sign_up_program">
              <a href="#contact">Запиши се сега</a>
            </button>
          </div>
        </div>
      </div>
      <div id="violin" ref={violinRef} className="classes_block">
        <div className="content">
          <div className="flip_card">
            <div className="flip_card_inner">
              <div className="flip_card_front">
                <img
                  className="classes_img"
                  src={images.ViolinClasses}
                  alt="Front Image"
                  onMouseEnter={handleMouseEnter(audioViolin, setViolinFlipped)}
                  onMouseLeave={handleMouseLeave(audioViolin, setViolinFlipped)}
                  onClick={handleClick(
                    audioViolin,
                    isViolinFlipped,
                    setViolinFlipped
                  )}
                />
              </div>
              <div className="flip_card_back">
                <img
                  className="classes_img1"
                  src={images.violin_classes_girl_playing}
                  alt="Back Image"
                  onMouseEnter={handleMouseEnter(audioViolin, setViolinFlipped)}
                  onMouseLeave={handleMouseLeave(audioViolin, setViolinFlipped)}
                  onClick={handleClick(
                    audioViolin,
                    isViolinFlipped,
                    setViolinFlipped
                  )}
                />
              </div>
            </div>
          </div>
          <div className="classes_text">
            <div className="headtext_cormorant_classes">
              <h1 className="headtext">Уроци по цигулка</h1>
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
            <button className="sign_up_program">
              <a href="#contact">Запиши се сега</a>
            </button>
          </div>
        </div>
      </div>
      <div id="ukulele" ref={ukuleleRef} className="classes_block">
        <div className="content">
          <div className="flip_card">
            <div className="flip_card_inner">
              <div className="flip_card_front">
                <img
                  className="classes_img"
                  src={images.UkuleleClasses}
                  alt="Front Image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick(null, null, null)} // no audio handling for ukulele
                />
              </div>
              <div className="flip_card_back">
                <img
                  className="classes_img1"
                  src={images.bg_10}
                  alt="Back Image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick(null, null, null)} // no audio handling for ukulele
                />
              </div>
            </div>
          </div>
          <div className="classes_text">
            <div className="headtext_cormorant_classes">
              <h1 className="headtext">Уроци по укулеле</h1>
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
            <button className="sign_up_program">
              <a href="#contact">Запиши се сега</a>
            </button>
          </div>
        </div>
      </div>
      <div id="cello" ref={celloRef} className="classes_block">
        <div className="content">
          <div className="flip_card">
            <div className="flip_card_inner">
              <div className="flip_card_front">
                <img
                  className="classes_img"
                  src={images.CelloClasses}
                  alt="Front Image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick(null, null, null)} // no audio handling for cello
                />
              </div>
              <div className="flip_card_back">
                <img
                  className="classes_img1"
                  src={images.cello_classes_girl_playing}
                  alt="Back Image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick(null, null, null)} // no audio handling for cello
                />
              </div>
            </div>
          </div>
          <div className="classes_text">
            <div className="headtext_cormorant_classes">
              <h1 className="headtext">Уроци по виолончело</h1>
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
            <button className="sign_up_program">
              <a href="#contact">Запиши се сега</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
