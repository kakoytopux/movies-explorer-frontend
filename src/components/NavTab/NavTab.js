import React from "react";
import { Link } from "react-router-dom";
import './NavTab.scss';

export default function NavTab() {
  return (
    <div className="sign-nav">
      <Link to='/signup' className="sign-nav__link link">Регистрация</Link>
      <Link to='/signin' className="sign-nav__link sign-nav__link_type_in link">Войти</Link>
    </div>
  );
}
