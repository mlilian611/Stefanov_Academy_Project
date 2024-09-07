import React, { useRef } from "react";
import "./AboutSchool.css";
import MusicDivider from "../MusicDivider/MusicDivider";

const AboutSchool = () => {
  const spanRef = useRef();
  return (
    <>
      <div>
        <div>
          <div className="headtext__cormorant_about_school">
            <h1 className="headtext_about_school title">
              Музикална школа Stefanov Music House
            </h1>
          </div>
          <div className="about_school">
            <span ref={spanRef} className="about_school_text">
              <p>
                Stefanov Music House е музикална школа създадена млади, изявени
                професионалисти, готови да предадат нататък своите знания и
                любов към музиката. Името Стефанов носи патронът, бащата,
                вдъхновението и тласъка на цялата институция. Запазвайки
                семейната идилия и интимност основна цел на нашия екип е да
                направи достъпни всички ползи от изучаването на музикалната
                материя - интелектуални, физически и душевни. При нас може да се
                изучават пиано, цигулка, виолончело, укулеле, солфеж и теория на
                музиката, английски и италиански език. Предлагаме също и учебна
                занималня.
              </p>
              <button className="button_about_school">
                <a href="/about-us">Преподаватели</a>
              </button>
            </span>
          </div>
        </div>
      </div>
      <MusicDivider />
    </>
  );
};

export default AboutSchool;
