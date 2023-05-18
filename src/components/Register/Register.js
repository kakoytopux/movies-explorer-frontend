import React, { useState } from "react";
import './Register.scss';
import Sign from "../Sign/Sign";
import { mainApi } from '../../utils/MainApi';

export default function Register() {
  const [fieldNameValue, setFieldNameValue] = useState('');
  const [fieldEmailValue, setFieldEmailValue] = useState('');
  const [fieldPasswordValue, setFieldPasswordValue] = useState('');

  function handleFieldName(evt) {
    setFieldNameValue(evt.target.value);
  }
  function handleFieldEmail(evt) {
    setFieldEmailValue(evt.target.value);
  }
  function handleFieldPassword(evt) {
    setFieldPasswordValue(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    
    mainApi.registerUser({
      name: fieldNameValue,
      email: fieldEmailValue,
      password: fieldPasswordValue,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <Sign sign={true} form={
      <>
      <div className="sign__container">
        <label htmlFor='name' className="sign__label">Имя</label>
        <input type="text" id="name" className="sign__field"
        name="name"
        required
        value={fieldNameValue}
        onChange={handleFieldName} />
      </div>
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
