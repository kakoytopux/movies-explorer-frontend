import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import NavTab from "../NavTab/NavTab";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to='/' className="header__logo" />
        <NavTab />
      </div>
    </header>
  );
}
