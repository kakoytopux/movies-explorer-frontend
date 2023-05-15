import React, { useState } from "react";
import './Navigation.scss';
import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  function setMenu(evt) {
    if(evt.target.classList.contains('navigation') || evt.target.classList.contains('navigation__cross')) {
      setBurgerMenu(!burgerMenu);
    }
  }

  return (
    <nav className="navigation" onClick={setMenu}>
      <div className={`navigation__container ${burgerMenu ? 'navigation__container_active' : ''}`}>
        <ul className='navigation__lists lists'>
          <li className="navigation__list navigation__list_type_display">
            <Link to='/' className="link">Главная</Link></li>
          <li className="navigation__list"><NavLink to='/movies' className={({ isActive }) => 
            `link ${isActive ? 'navigation-link-active' : ''}`
          }>Фильмы</NavLink></li>
          <li className="navigation__list"><NavLink to='/saved-movies' className={({ isActive }) => 
            `link ${isActive ? 'navigation-link-active' : ''}`
          }>Сохранённые фильмы</NavLink></li>
          <li className="navigation__list navigation__list_type_profile">
            <Link to='/profile' className={`link-profile link ${burgerMenu ? 'link-profile_visible' : ''}`}>Аккаунт</Link>
          </li>
        </ul>
        <div className="navigation__cross" onClick={setMenu}></div>
      </div>
    </nav>
  );
}
