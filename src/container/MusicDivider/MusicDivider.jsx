import React from "react";
import "./MusicDivider.css";
import images from "../../constants/images";

const MusicDivider = () => {
  return (
    <div className="music_divider_section">
      <img className="music_divider" src={images.music_divider} alt="" />
    </div>
  );
};

export default MusicDivider;
