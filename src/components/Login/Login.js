import React, { useState } from "react";
import './Login.scss';
import Sign from "../Sign/Sign";
import { mainApi } from '../../utils/MainApi';

export default function Login() {
  const [fieldEmailValue, setFieldEmailValue] = useState('');
  const [fieldPasswordValue, setFieldPasswordValue] = useState('');

  function handleFieldEmail(evt) {
    setFieldEmailValue(evt.target.value);
  }
  function handleFieldPassword(evt) {
    setFieldPasswordValue(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    
    mainApi.loginUser({
      email: fieldEmailValue,
      password: fieldPasswordValue,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <Sign sign={false} form={
      <>
      <div className="sign__container">
        <label htmlFor='email' className="sign__label">E-mail</label>
        <input type="email" id="email" className="sign__field"
        name="email"
        required
        value={fieldEmailValue}
        onChange={handleFieldEmail} />
      </div>
      <div className="sign__container">
        <label htmlFor='password' className="sign__label">Пароль</label>
        <input type="password" id="password" className="sign__field"
        name="password"
        required
        value={fieldPasswordValue}
        onChange={handleFieldPassword} />
      </div>
      </>
    } onSubmit={handleSubmit} />
  );
}
