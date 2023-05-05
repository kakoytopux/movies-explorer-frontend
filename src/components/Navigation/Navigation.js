import React from "react";
import './Navigation.scss';
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="navigation lists">
      <li className="navigation__list"><NavLink to='/movies' className={({ isActive }) => 
        `navigation__list-link link ${isActive ? 'navigation__list-link_active' : ''}`
      }>Фильмы</NavLink></li>
      <li className="navigation__list"><NavLink to='/saved-movies' className={({ isActive }) => 
        `navigation__list-link link ${isActive ? 'navigation__list-link_active' : ''}`
      }>Сохранённые фильмы</NavLink></li>
    </ul> 
  );
}
