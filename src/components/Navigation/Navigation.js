import React, { useState } from "react";
import './Navigation.scss';
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  function setMenu() {
    setBurgerMenu(!burgerMenu);
  }

  return (
    <nav className="navigation" onClick={setMenu}>
      <ul className={`navigation__lists lists ${burgerMenu ? 'navigation__lists_active' : ''}`}>
        <li className="navigation__list navigation__list_type_display"><NavLink to='/' className={({ isActive }) => 
          `navigation__list-link link ${isActive ? 'navigation__list-link_active' : ''}`
        }>Главная</NavLink></li>
        <li className="navigation__list"><NavLink to='/movies' className={({ isActive }) => 
          `navigation__list-link link ${isActive ? 'navigation__list-link_active' : ''}`
        }>Фильмы</NavLink></li>
        <li className="navigation__list"><NavLink to='/saved-movies' className={({ isActive }) => 
          `navigation__list-link link ${isActive ? 'navigation__list-link_active' : ''}`
        }>Сохранённые фильмы</NavLink></li>
      </ul>
    </nav>
  );
}
