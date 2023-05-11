import React from "react";
import './Sign.scss';
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Sign({ sign, form }) {
  return (
    <>
    <div className="sign-container">
      <Header sign={true} />
      <main className="content">
        <section className="sign">
          <h1 className="sign__title">{sign ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
          <form className="sign__form" method="post" name="sign">
            {form}
            <button type="submit" className={`sign__submit ${!sign && 'sign__submit_type_sign-in'}`}>
              {sign ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </form>
          <p className="sign__text">
          {sign ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}
          <Link to={sign ? '/signin' : '/signup'}
          className="sign__link link">{sign ? 'Войти' : 'Зарегистрироваться'}</Link></p>
        </section>
      </main>
    </div>
    </>
  );
}
