import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
import Navigation from '../Navigation/Navigation'

export default function Header({ movies }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to='/' className="header__logo" />
        { movies && <Navigation />}
        { movies ? <Link to='/profile' className="header__link-profile link">Аккаунт</Link> : <NavTab /> }
      </div>
    </header>
  );
}
