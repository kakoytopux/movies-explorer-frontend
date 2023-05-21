import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
import Navigation from '../Navigation/Navigation'

export default function Header({ main, movies, sign, auth }) {
  return (
    <header className={`header ${movies && 'indent-section'} ${sign ? 'header_type_sign' : ''}`}>
      <div className={`header__container ${movies ? 'header__container_type_movies' : ''} ${sign ? 'header__container_type_sign' : ''}`}>
        <Link to='/' className="header__logo" />
        { auth && <Navigation /> }
        { auth && <Link to='/profile' className="link-profile link">Аккаунт</Link> }
        { main && !auth && <NavTab /> }
      </div>
    </header>
  );
}
