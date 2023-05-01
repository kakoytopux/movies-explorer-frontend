import React from "react";
import { Link } from "react-router-dom";
import './NavTab.scss';

export default function NavTab() {
  return (
    <div className="sign">
      <Link to='/signup' className="sign__up link">Регистрация</Link>
      <Link to='/signin' className="sign__in link">Войти</Link>
    </div>
  );
}
