import React from "react";
import './Register.scss';
import Sign from "../Sign/Sign";

export default function Register() {
  return (
    <Sign sign={true} form={
      <>
      <div className="sign__container">
        <label for='name' className="sign__label">Имя</label>
        <input type="text" id="name" className="sign__field" name="name" />
      </div>
      <div className="sign__container">
        <label for='email' className="sign__label">E-mail</label>
        <input type="email" id="email" className="sign__field" name="email" />
      </div>
      <div className="sign__container">
        <label for='password' className="sign__label">Пароль</label>
        <input type="password" id="password" className="sign__field" name="password" />
      </div>
      </>
    } />
  );
}
