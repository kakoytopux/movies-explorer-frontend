import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to='/' className="header__logo" />
        <div className="header__container-sign">
          <Link to='/signup' className="header__sign-up">Регистрация</Link>
          <Link to='/signin' className="header__sign-in">Войти</Link>
        </div>
      </div>
    </header>
  );
}
