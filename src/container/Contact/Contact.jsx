import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import MyMap from "../Map/Map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6svggmx", "template_ib0p0go", form.current, {
        publicKey: "rbLrlF5iLY592Fowv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact__section_page">
      <div className="contact__container">
        <div className="contact_section">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className="name" type="text" name="user_name" />
            <label>Email</label>
            <input className="email" type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input className="message" type="submit" value="Send" />
          </form>
          <div className="contact__block">
            <div className="contact__text">
              <div className="headtext__cormorant__contact">
                <h1 className="headtext">Контакти</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                interdum cursus leo, ac rutrum enim vulputate sit amet. Praesent
                fringilla sem diam, eget scelerisque quam vehicula sit amet.
                Nulla nec erat eu diam tempor cursus. Donec tincidunt lobortis
                felis, in mattis urna efficitur at.
              </p>
            </div>
          </div>
        </div>
        <div className="map_container">
          <MyMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
