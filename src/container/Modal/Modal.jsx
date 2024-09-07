import React from "react";

const Modal = ({ content, closeModal, isHiding }) => {
  return (
    <div className={`popup ${isHiding ? "hide" : "show"}`}>
      <div
        className="pop-up_image_background"
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
        aria-label="Background"
      ></div>
      <img className="pop-up_image" src={content.image} alt={content.image} />
      <h3 className="pop-up_title">{content.title}</h3>
      <p className="pop-up_content">{content.content}</p>
      <button className="pop-up_close_button" onClick={closeModal}>
        Затвори
      </button>
    </div>
  );
};

export default Modal;
