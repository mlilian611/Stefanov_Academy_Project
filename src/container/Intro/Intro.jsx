import React, { useRef, useState, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { stefanov_music } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if the device is iOS
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream);

    const videoElement = vidRef.current;

    // IntersectionObserver to control video playback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch((error) => {
              console.error("Video play failed: ", error);
            });
            setPlayVideo(true);
          } else {
            videoElement.pause();
            setPlayVideo(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const handlePlayPause = () => {
    setPlayVideo(!playVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play().catch((error) => {
        console.error("Video play failed: ", error);
      });
    }
  };

  return (
    <div className="app__video">
      <video
        src={stefanov_music}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={isIOS}
        muted
        autoPlay
        playsInline
        className="app__video-element" // Add a class for specific styling if needed
      />
      {!isIOS && (
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_button flex__center"
            onClick={handlePlayPause}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
