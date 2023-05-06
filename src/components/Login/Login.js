import React from "react";
import './Login.scss';
import Sign from "../Sign/Sign";

export default function Login() {
  return (
    <Sign sign={false} form={
      <>
      <div className="sign__container">
        <label htmlFor='email' className="sign__label">E-mail</label>
        <input type="email" id="email" className="sign__field" name="email" />
      </div>
      <div className="sign__container">
        <label htmlFor='password' className="sign__label">Пароль</label>
        <input type="password" id="password" className="sign__field" name="password" />
      </div>
      </>
    } />
  );
}
