import React from "react";
import './AboutMe.scss';
import student from '../../images/student.png';

export default function AboutMe() {
  return (
    <section className="about-me indent-section">
      <h3 className="title-section">Студент</h3>
      <div className="about-me__container">
        <div className="about-me__container-text">
          <h2 className="about-me__title">Виталий</h2>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__desc">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="/#" className="about-me__link-github">Github</a>
        </div>
        <img src={student} alt="Фото студента" className="about-me__img" />
      </div>
    </section>
  );
}
