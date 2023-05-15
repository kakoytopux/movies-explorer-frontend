import React from "react";
import './NotFound.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="content">
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <div className="not-found__container">
          <Link to='/' className="not-found__btn link">Назад</Link>
        </div>
      </section>
    </main>
  );
}
