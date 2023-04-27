import React from "react";
import './Techs.scss';

export default function Techs() {
  return (
    <section className="techs indent-section">
      <h3 className="title-section">Технологии</h3>
      <div className="techs-info">
        <div className="techs-info__container">
          <h1 className="techs-info__title">7 технологий</h1>
          <p className="techs-info__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className="techs-info__lists">
          <li className="techs-info__list">
            <p className="techs-info__list-text">HTML</p>
          </li>
          <li className="techs-info__list">
            <p className="techs-info__list-text">CSS</p>
          </li>
          <li className="techs-info__list">
            <p className="techs-info__list-text">JS</p>
          </li>
          <li className="techs-info__list">
            <p className="techs-info__list-text">React</p>
          </li>
          <li className="techs-info__list">
            <p className="techs-info__list-text">Git</p>
          </li>
          <li className="techs-info__list">
            <p className="techs-info__list-text">Express.js</p>
          </li>
          <li className="techs-info__list">
            <p className="techs-info__list-text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
