import React from "react";
import './Header.scss';
import { Link, NavLink } from "react-router-dom";
import NavTab from "../NavTab/NavTab";

export default function Header({ movies }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to='/' className="header__logo" />
        { movies ? 
        <ul className="header__lists lists">
          <li className="header__list"><NavLink to='/movies' className={({ isActive }) => 
            `header__list-link link ${isActive ? 'header__list-link_active' : ''}`
          }>Фильмы</NavLink></li>
          <li className="header__list"><NavLink to='/saved-movies' className={({ isActive }) => 
            `header__list-link link ${isActive ? 'header__list-link_active' : ''}`
          }>Сохранённые фильмы</NavLink></li>
        </ul> : ''
        }
        { movies ? <Link to='/profile' className="header__link-profile link">Аккаунт</Link> : <NavTab /> }
      </div>
    </header>
  );
}
