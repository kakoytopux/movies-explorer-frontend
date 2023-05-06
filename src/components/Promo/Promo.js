import React from "react";
import './Promo.scss';

export default function Promo() {
  return (
    <section className="banner indent-section">
      <div className="banner__container">
        <h1 className="banner__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="banner__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href="/#" target="_blank" className="banner__link link">Узнать больше</a>
      </div>
      <div className="banner__planet"></div>
    </section>
  );
}
