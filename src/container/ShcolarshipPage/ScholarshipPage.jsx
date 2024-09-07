import React from "react";
import "./ScholarshipPage.css";
import { images } from "../../constants";

const ScholarshipPage = () => {
  return (
    <div>
      <div className="scholarship__section">
        <div className="scholarship__block">
          <div className="scholarship__text">
            <div className="headtext_cormorant_scholarship">
              <h1 className="headtext_scholarship">Стипендии</h1>
            </div>
            <p>
              В Stefanov Music House вярваме в подпомагане на младите таланти и
              връщане обратно в обществото, това което е вложено в нас. Нашата
              мечта е незаменимото обогатяване от изучаването на музиката да
              бъде достъпно за всеки! Събраният фонд е с насоченост деца в
              неравностойно положение (деца лишени от родителска грижа, деца от
              социално слаби семейства и деца със специални образователни
              потребности). В случай, че желаете да кандидатствате за стипендия,
              да дарите към каузата или да получите повече информация не се
              колебайте да се свържите.
            </p>
            <button className="sign_up_scholarship">
              <a href="/Contact">Пиши ни за повече информация</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;
