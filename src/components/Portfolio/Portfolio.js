import React from "react";
import './Portfolio.scss';

export default function Portfolio() {
  return (
    <section className="portfolio indent-section">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__lists lists">
        <li className="portfolio__list"><a href="/#" target="_blank" className="link">Статичный сайт</a></li>
        <li className="portfolio__list"><a href="/#" target="_blank" className="link">Адаптивный сайт</a></li>
        <li className="portfolio__list"><a href="/#" target="_blank" className="link">Одностраничное приложение</a></li>
      </ul>
    </section>
  );
}
