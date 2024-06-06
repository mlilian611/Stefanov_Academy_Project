import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div>
    <h1 className="headtext__cormorant">За нас</h1>
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="card-grid">
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={images.gabriela_stefanova} alt="Front 1" />
                <h2>Габриела Стефанова</h2>
              </div>
              <div className="flip-card-back">
                <img src={images.back_card} alt="Back 1" />
                <h2>Пиано</h2>

                <p>
                  Габриела Стефанова, родена на 7.11.1996г. в гр. Пловдив,
                  започва да свири на пиано от 5 годишна при г-жа Людмила
                  Петрова. Учи в НУМТИ "Добрин Петков" в класа на г-жа Антоанета
                  Генова от първи клас. Завършва гимназия в НМУ "Любомир
                  Пипков", гр.София, в класа на проф.док.Борислава Танева.
                  Започва висшето си образование във Виена, Австрия в Musik und
                  Kunst Privatuniversität der Stadt Wien в класа по пиано на
                  проф. Клаус Щикен. Понастоящем е студентка в НМА "Панчо
                  Владигеров", гр.София, в класа на проф.док.Борислава Танева и
                  в Accademia Musicale S. Cecilia, гр. Бергамо, в класа на проф.
                  Константин Богино.
                  <div className="button">
                    <button>Научи повече</button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={images.debora_stefanova} alt="Front 2" />
                <h2>Дебора Стефанова</h2>
              </div>
              <div className="flip-card-back">
                <img src={images.back_card} alt="Back 2" />
                <h2>Цигулка</h2>
                <p>Back Text 2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={images.borislav_benchev} alt="Front 4" />
                <h2>Борислав Бенчев</h2>
              </div>
              <div className="flip-card-back">
                <img src={images.back_card} alt="Back 4" />
                <h2>Пиано</h2>
                <p>Back Text 4</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={images.sofia_chernishkova} alt="Front 4" />
                <h2>София Чернишкова</h2>
              </div>
              <div className="flip-card-back">
                <img src={images.back_card} alt="Back 4" />
                <h2>Пиано</h2>
                <p>Back Text 4</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={images.alek_canov} alt="Front 3" />
                <h2>Алек Цанов</h2>
              </div>
              <div className="flip-card-back">
                <img src={images.back_card} alt="Back 3" />
                <h2>Виолончело</h2>
                <p>Back Text 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
