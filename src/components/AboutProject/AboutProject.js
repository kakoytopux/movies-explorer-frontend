import React from "react";
import './AboutProject.scss';

export default function AboutProject() {
  return (
    <section className="about-project indent-section">
      <h3 className="title-section">О проекте</h3>
      <div className="project-info">
        <div className="project-info__container">
          <h4 className="project-info__title">Дипломный проект включал 5 этапов</h4>
          <p className="project-info__desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project-info__container">
          <h4 className="project-info__title">На выполнение диплома ушло 5 недель</h4>
          <p className="project-info__desc">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="passing">
        <div className="passing__container">
          <div className="passing__background passing__background_type_blue">
            <p className="passing__time passing__time_type_blue">1 неделя</p>
          </div>
          <p className="passing__direction">Back-end</p>
        </div>
        <div className="passing__container passing__container_size_l">
          <div className="passing__background passing__background_type_gray">
            <p className="passing__time">4 недели</p>
          </div>
          <p className="passing__direction">Front-end</p>
        </div>
      </div>
    </section>
  );
}
