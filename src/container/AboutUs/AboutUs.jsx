import React, { useState } from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import Modal from "../Modal/Modal";

const AboutUs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isHiding, setIsHiding] = useState(false);

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

  return (
    <div>
      <div className="app__about_us">
        <h1 className="headtext_cormorant_about_us">За нас</h1>
        <div className="card-grid">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={images.gabriela_stefanova} alt="Front 1" />
                  <h2>Габриела Стефанова</h2>
                </div>
                <div className="flip-card-back flip-card-back-piano">
                  <img src={images.pianoclass} alt="Back 1" />
                  <h2>Пиано</h2>
                  <p>
                    Родена на 7.11.1996г. в гр. Пловдив, започва да свири на
                    пиано от 5 годишна при г-жа Людмила Петрова. Учи в НУМТИ
                    "Добрин Петков" в класа на г-жа Антоанета Генова от първи
                    клас. Завършва гимназия в НМУ "Любомир Пипков", гр.София, в
                    класа на проф.док.Борислава Танева.
                    <div className="button">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            title: "Габриела Стефанова",
                            content: `Габриела Стефанова, родена на 7.11.1996г. в гр. Пловдив, започва да свири на пиано от 5 годишна при г-жа Людмила Петрова. Учи в НУМТИ "Добрин Петков" в класа на г-жа Антоанета Генова от първи клас. Завършва гимназия в НМУ "Любомир Пипков", гр.София, в класа на проф.док.Борислава Танева. Започва висшето си образование във Виена, Австрия в Musik und Kunst Privatuniversität der Stadt Wien в класа по пиано на проф. Клаус Щикен. Понастоящем е студентка в НМА "Панчо Владигеров", гр.София, в класа на проф.док.Борислава Танева и в Accademia Musicale S. Cecilia, гр. Бергамо, в класа на проф. Константин Богино.
                          Лауреат е на редица конкурси в чужбина и в страната. Посещавала е майсторските класове на Людмил Ангелов, Тамара Падубная, Йоханес Кропфич, Мартин Хюс и др. Изнасяла е рецитали в залите на Българско Национално Радио Пловдив и София, културна къща Витгенщайн и др. Участвала е в концерти организирани в Radiokulturhaus Wien, като част от студентския оркестър на Musik und Kunst Privatuniversität der Stadt Wien. Свирила е като солист с диригентите Кирил Чапликов, Константин Илиевки, Микис Михаелидис и др.
                          Габриела вече 5 години се занимава с преподаване по пиано на деца и възрастни. Също като нея учениците и вече се радват на награди и успехи в сферата на музиката`,
                            image: images.gabriela_stefanova,
                          })
                        }
                      >
                        Научи повече
                      </button>
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
                <div className="flip-card-back flip-card-back-violin">
                  <img src={images.violinclass} alt="Back 2" />
                  <h2>Цигулка</h2>
                  <p>
                    Родена през 1998 г. в Пловдив, България. Започва да се
                    занимава с музика още от четири годишна възраст. Първо с
                    пиано, а две години по-късно с цигулка. Завършва с отличие
                    НМУ „Любомир Пипков” в класа по цигулка на Благородна
                    Танева.
                    <div class="button">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            title: "Дебора Стефанова",
                            content: `Дебора Стефанова е родена през 1998 г. в Пловдив, България. Започва да се занимава с музика още от четири годишна възраст. Първо с пиано, а две години по-късно с цигулка. Завършва с отличие НМУ Любомир Пипков в класа по цигулка на Благородна Танева.
                           Още в ученическите си години става лауреат на редица национални и международни конкурси, измежду които: Международен конкурс за струнни инструменти (Ниш, 2015), Национален конкурс за българска музика Върбан Върбанов (Бургас, 2016), Международен конкурс за млади изпълнители (Перник, 2016). Наградена е и като част от пиано трио в Международния радиоконкурс за млади музиканти „Concertino Praga” (Прага, 2015). В последната си година от гимназията бива избрана за концертмайстор на Младежка филхармония, София.
                            Дебора е била участник в майсторските класове на световни светила като Мидори Гото, Павел Верников, Михаел Фришеншлагер, Игор Волошин, Деян Богданович, Светлана Макарова, Кеворк Мардиросян, Светлин Русев и др. В продължение на няколко години е част от класа на Павел Верников в Академия “Санта Чечилия” (Бергамо, Италия).
                            След завършването си заминава за Швейцария, където се дипломира с отличие за висшето си образование в сферата на музикалните изкуства, в класа по цигулка на проф. Светлана Макарова. Там участва в редица музикални проекти от различно естество, като: част от оркестъра на фестивала "Жура" в кантона Жура, Швейцария; участие в поредица от ораторски концерти в колаборация с театъра на Лозана; солов рецитал в Лозана, за който получава и отличие; както и много други.
                            В момента е част от артистичния екип по специален проект в колаборация на Копенхагенска филхармония и 18-тия най-добър ресторант в света, с две звезди Мишлен, Алкемист.
                            Преподава на деца от четири годишна възраст и на възрастни. Започва да трупа опит още през 2018 година, като се занимава с деца от различни държави и култури, на различни езици.`,
                            image: images.debora_stefanova,
                          })
                        }
                      >
                        Научи повече
                      </button>
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
                  <img src={images.borislav_benchev} alt="Front 3" />
                  <h2>Борислав Бенчев</h2>
                </div>
                <div className="flip-card-back flip-card-back-piano">
                  <img src={images.pianoclass} alt="Back 3" />
                  <h2>Пиано</h2>
                  <p>
                    Роден на 21.01.1997г. в Ботевград, в музикално семейство.
                    Баща му(Анатоли Киров) свири на пиано и гайда, а майка му се
                    занимава с народни танци. На три годишна възраст той и
                    семейството му се местят в София. Започва да свири на пиано
                    на четири години при Светла Славчева.
                    <div class="button">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            title: "Борислав Бенчев",
                            content: `Борислав Бенчев е роден на 21.01.1997г. в Ботевград, в музикално семейство. Баща му(Анатоли Киров) свири на пиано и гайда, а майка му се занимава с народни танци. На три годишна възраст той и семейството му се местят в София. Започва да свири на пиано на четири години при Светла Славчева. Три години по-късно Борислав започва образованието си в НМУ "Любомир Пипков". Печели награди в страната и чужбина, както като солист така и като част от камерен състав. Взима участие в редица концерти, като е желан и за акомпанятор от своите връстници и приятели. Свири и като част от джаз бенда на НМУ "Любомир Пипков". Интересът му не спира само с класическата музика, но се развива професионално и в поп и джаз сферата.
                          2017г. Борислав става студент в Conservatorium van Amsterdam в класа на Франк Петерс. По време на обучението си взема участие в разнородни групи и състави, изпълнявайки музика в различни стилове. Последните три години е акомпанятор на няколко холандски хора. Завърша с бакалавърска степен през 2021г.
                          Воден от интересите си към различните жанрове музика в началото на 2021г. Борислав композира и съставя тетрадка с девет джазови миниатюри. Освен неговите композиции описва и своя методика за най-добри резултати при упражнение на различни гами и акорди`,
                            image: images.borislav_benchev,
                          })
                        }
                      >
                        Научи повече
                      </button>
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
                  <img src={images.sofia_chernishkova} alt="Front 4" />
                  <h2>София Чернишкова</h2>
                </div>
                <div className="flip-card-back flip-card-back-piano">
                  <img src={images.pianoclass} alt="Back 4" />
                  <h2>Пиано</h2>
                  <p>
                    Родена на 23.02.2002г. в София. Завършва НМУ ''Л. Пипков'' в
                    класа по пиано на Емилия Канева. В момента е студентка в НМА
                    “Панчо Владигеров” в класа по пиано на проф.д-р Борислава
                    Танева. На 8 години печели своя първи клавирен конкурс.
                    <div class="button">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            title: "София Черншкова",
                            content: `София Чернишкова е родена на 23.02.2002г. в София. Завършва НМУ ''Л. Пипков'' в класа по пиано на Емилия Канева. В момента е студентка в НМА “Панчо Владигеров” в класа по пиано на проф.д-р Борислава Танева. На 8 години печели своя първи клавирен конкурс. Лауреат е на многобройни национални и международни конкурси, сред които: Първа награда на межданароден конкурс “Premio Accademia” - Рим, Италия; Втора награда на международен конкурс „Млади Виртуози“ – София; Втора награда на национален конкурс „Панчо Владигеров“ – Шумен; Трета награда на международен конкурс "From Bach to Jazz" - Атина, Гърция. София свири на множество концерти, сред които Официалната церемония по повод Деня на народните будители с участието на Президента на Република България Румен Радев и концертите на Шопеновото общество. През октомври 2020г. София прави дебют като солист на Симфониета – Враца с изпълнението си на Втория клавирен концерт от Бетовен. През годините участвa във фестивали в България и Италия. Посещавала е майсторски класове на известни български и чуждестранни пианисти, сред които: проф.Людмил Ангелов, проф. Атанас Куртев, проф. Емма Тахмизян, проф. Катя Попова-Зидрон (Полша), Антонио ди Кристофано(Италия). През лятото на 2019г. взима участие във фестивала в гр.Ловере(Италия),където работи с Филип Раскин(Белгия) и проф.Виченцо Балцани(Италия).`,
                            image: images.sofia_chernishkova,
                          })
                        }
                      >
                        Научи повече
                      </button>
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
                  <img src={images.plamena_manokaleva} alt="Front 5" />
                  <h2>Пламена Манокалева</h2>
                </div>
                <div className="flip-card-back flip-card-back-chello">
                  <img src={images.cheloclass} alt="Back 5" />
                  <h2>Виолончело</h2>
                  <p>
                    Завършва НУМСИ "проф. Панчо Владигеров" гр. Бургас със
                    специалност виолончело в класа на г-жа Жасмина Чернева. Като
                    ученичка участва активно в музикалния живот на училището.
                    През 2017 и 2018 става част от програмата ЕРАЗЪМ+ с концерти
                    в Германия и Унгария.
                    <div class="button">
                      <button
                        onClick={() =>
                          handleButtonClick({
                            title: "Пламена Манокалева",
                            content: `Пламена Манолакева завършва НУМСИ "проф. Панчо Владигеров" гр. Бургас със специалност виолончело в класа на г-жа Жасмина Чернева. Като ученичка участва активно в музикалния живот на училището. През 2017 и 2018 става част от програмата ЕРАЗЪМ+ с концерти в Германия и Унгария. Понастоящем учи в НМА "проф. Панчо Владигеров" гр. София в класа по виолончело на доц. Д-р Атанас Кръстев. Лауреат е на конкурси сред които: Национален конкурс за млади инструменталисти и певци "Светослав Обретенов" , Международен конкурс за изпълнение на немски и австрийска музика “MAGIC”, Международен виртуален конкурс “Flying stage” и др. Става лауреат на програмата “1000стипендии”.  Взима участие в различни фестивали- “Celleast” “IconArts", “Art academy” - Sozopol ,  „Челисимо“, „Тримонтиада” и др.  Дебютира като солист на Академичен Симфоничен Оркестър през 2021 г. в концерт, по случай 100 - годишнината на НМА "проф. Панчо Владигеров." През учебната 2023-2024 г. Пламена учи в National University of Music Bucharest  в класа по виолончело на проф. Разван Сума , чрез програмата ЕРАЗЪМ. Участва в майсторските класове на Готие Капюсон, Андрей Йоница, Александър Рам, Ласло Феньо, Валентин Радуциу, Денис Северин, Сергей Малов и др.`,
                            image: images.plamena_manokaleva,
                            // backgroundImage: "/assets/pianoclass.png",
                          })
                        }
                      >
                        Научи повече
                      </button>
                    </div>
                  </p>
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
  );
};

export default AboutUs;
