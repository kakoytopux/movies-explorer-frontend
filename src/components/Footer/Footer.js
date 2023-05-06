import React from "react";
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer indent-section">
      <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__lists lists">
          <li className="footer__list"><a href="/#" target="_blank" className="footer__list-link link">Яндекс.Практикум</a></li>
          <li className="footer__list"><a href="/#" target="_blank" className="footer__list-link link">Github</a></li>
        </ul>
      </div>
    </footer>
  );
}
