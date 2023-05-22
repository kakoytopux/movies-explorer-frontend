import React from "react";
import './Portfolio.scss';

export default function Portfolio() {
  return (
    <section className="portfolio indent-section">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__lists lists">
        <li className="portfolio__list"><a href="https://kakoytopux.github.io/how-to-learn/" target="_blank" className="portfolio__list-link link" rel="noreferrer">Статичный сайт</a></li>
        <li className="portfolio__list"><a href="https://kakoytopux.github.io/russian-travel/" target="_blank" className="portfolio__list-link link" rel="noreferrer">Адаптивный сайт</a></li>
        <li className="portfolio__list"><a href="https://mestodd.nomoredomains.monster/sign-in" target="_blank" className="portfolio__list-link link" rel="noreferrer">Одностраничное приложение</a></li>
      </ul>
    </section>
  );
}
