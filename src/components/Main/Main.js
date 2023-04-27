import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

export default function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
    </main>
  );
}
