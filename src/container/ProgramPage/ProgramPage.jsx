import React, { useEffect } from "react";
import "./ProgramPage.css";
import images from "../../constants/images";

const ProgramPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="program_page_section">
      <div className="program_block">
        <div className="headtext_cormorant_program">
          <h1 className="headtext_program">Занималня</h1>
        </div>
        <div className="content_with_image_program">
          <div className="program_text">
            <div className="headtext_cormorant_program">
              <h1 className="subtext_program">Учебна Занималня</h1>
            </div>
            <p>
              Нашата занималня предлага помощ при подготвянето на училищните
              задания, преди или след учебните занятия. Освен това в свободното
              време между блоковете работа целим да подбудим и развием
              креативността на децата, като им представим колоритността на
              изкуството. А за тези, които се развиват в сферата на музиката,
              има предвидено време и място, където малчуганите могат да се
              упражняват на своя инструмент. От Музикална къща Стефанов
              предлагаме също допълнителни уроци по втори език (английски,
              френски, немски, италиански), по желание. Английски и италиански
              език се водят от преподаватели, на които се явяват майчен език.
              Също така предлагаме и помощ по теоретични музикални предмети,
              допълнителни уроци по теория, цигулка, пиано, виолончело, китара и
              укулеле.
            </p>
            <button className="sign_up_program">
              <a href="/Contact">Запиши се сега</a>
            </button>
          </div>
          <div className="program_images">
            <img className="program_img" src={images.program} alt="" />
            <img className="program_img2" src={images.program2} alt="" />
          </div>
        </div>
        <div className="muzieknootjes">
          <div className="noot-1">&#9835; &#9833;</div>
          <div className="noot-2">&#9833;</div>
          <div className="noot-3">&#9839; &#9834;</div>
          <div className="noot-4">&#9834;</div>
        </div>
      </div>

      <div className="program_block">
        <div className="content_with_image_program">
          <div className="program_images">
            <img className="program_img3" src={images.program3} alt="" />
            <img className="program_img4" src={images.program4} alt="" />
          </div>
          <div className="program_text">
            <div className="headtext_cormorant_program">
              <h1 className="subtext_program">Лятна Занималня</h1>
            </div>
            <p>
              В музикалната занималня на Stefanov Music House ще има много
              песни, танци, арт работилнички, но и малко повече. Ще си
              разказваме за различните инструменти, различните автори и
              музикални епохи. Ще пишем, четем и преписваме текстове от
              музикално естество. Ще изучаваме английски и математика чрез
              музиката. Всяко дете има време за самостоятелно четене на лятната
              си литература. А веднъж в седмицата с децата посещаваме различни
              културни събития. За тези, които проявят интерес ще има възможност
              за индивидуални уроци по пиано, цигулка, виолончело и укулеле.
              Индивидуалните уроци се доплащат, спрямо времетраенето им. При
              пожелание свирещите деца ще могат да се усамотяват и да се
              упражняват на избраните си инструменти.
            </p>
            <button className="sign_up_program">
              <a href="/Contact">Запиши се сега</a>
            </button>
          </div>
        </div>
        <div className="muzieknootjes">
          <div className="noot-1">&#9835; &#9833;</div>
          <div className="noot-2">&#9833;</div>
          <div className="noot-3">&#9839; &#9834;</div>
          <div className="noot-4">&#9834;</div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
