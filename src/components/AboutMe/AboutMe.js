import React from "react";
import './AboutMe.scss';
import student from '../../images/student.png';

export default function AboutMe() {
  return (
    <section className="about-me indent-section">
      <h2 className="title-section">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__container-text">
          <p className="about-me__heading">Виталий</p>
          <p className="about-me__subheading">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__desc">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/kakoytopux" target="_blank" className="about-me__link-github link">Github</a>
        </div>
        <img src={student} alt="Фото студента" className="about-me__img" />
      </div>
    </section>
  );
}
