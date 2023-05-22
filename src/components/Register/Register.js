import React, { useEffect, useState } from "react";
import './Register.scss';
import Sign from "../Sign/Sign";
import { mainApi } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../useForm/useForm';

export default function Register({ login }) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [ noAuth, setNoAuth ] = useState(true);

  useEffect(() => {
    setNoAuth(true);
  }, [values]);

  function handleSubmit(evt) {
    evt.preventDefault();
    
    setNoAuth(true);
    
    mainApi.registerUser({
      name: values.name,
      email: values.email,
      password: values.password,
    })
    .then(() => {
      mainApi.loginUser({
        email: values.email,
        password: values.password,
      })
      .then(() => {
        login();
        navigate('/movies');
      })
      .catch(() => setNoAuth(false));
    })
    .catch(() => setNoAuth(false));
  }

  return (
    <Sign sign={true} form={
      <>
      <div className="sign__container">
        <label htmlFor='name' className="sign__label">Имя</label>
        <input type="text" id="name" className="sign__field"
        name="name"
        required
        value={values.name || ''}
        onChange={handleChange} />
        <span className="sign__error">{errors.name}</span>
      </div>
      <div className="sign__container">
        <label htmlFor='email' className="sign__label">E-mail</label>
        <input type="email" id="email" className="sign__field"
        name="email"
        required
        value={values.email || ''}
        onChange={handleChange}
        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
        />
        <span className="sign__error">{errors.email}</span>
      </div>
      <div className="sign__container">
        <label htmlFor='password' className="sign__label">Пароль</label>
        <input type="password" id="password" className="sign__field"
        name="password"
        required
        value={values.password || ''}
        onChange={handleChange} />
        <span className="sign__error">{errors.password}</span>
      </div>
      </>
    } onSubmit={handleSubmit} isValid={isValid} noAuth={noAuth} />
  );
}
