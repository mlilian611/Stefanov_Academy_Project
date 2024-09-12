import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import MyMap from "../Map/Map";

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mc1eqlq", "template_ib0p0go", form.current, {
        publicKey: "rbLrlF5iLY592Fowv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailSent(true);
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
          {emailSent ? (
            <div className="success_message">
              <h1>Съобщението е изпратено!</h1>
              <p>Благодарим Ви за запитването. Ще се свържем с Вас скоро!</p>
            </div>
          ) : (
            <>
              <div className="contact__block">
                <div className="contact__text">
                  <div className="headtext__cormorant__contact">
                    <h1 className="headtext">Контакти</h1>
                  </div>
                  <p>
                    Останете ни Вашето запитване и контакт за обратна връзка и
                    ние ще се свържем с Вас! Може и да ни потърсите на
                    <a href="tel:++359894301301"> +359894301301 </a> или{" "}
                    <a href="mailto:stefanov.music.house@gmail.com">
                      stefanov.music.house@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <form className="form" ref={form} onSubmit={sendEmail}>
                <label>Име</label>
                <input className="name" type="text" name="user_name" />
                <label>Имейл</label>
                <input className="email" type="email" name="user_email" />
                <label htmlFor="message">Съобщение</label>
                <textarea name="message" />
                <input className="message" type="submit" value="Изпрати" />
              </form>
            </>
          )}
        </div>
        <div className="map_container">
          <MyMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
