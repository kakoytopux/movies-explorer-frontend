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
        <label htmlFor='name' className="sign__label">
          <p className="sign__heading">Имя</p>
          <input type="text" id="name" className="sign__field"
          name="name"
          required
          value={values.name || ''}
          onChange={handleChange}
          />
          <p className="error-text">{errors.name}</p>
        </label>
        <label htmlFor='email' className="sign__label">
          <p className="sign__heading">E-mail</p>
          <input type="email" id="email" className="sign__field"
          name="email"
          required
          value={values.email || ''}
          onChange={handleChange}
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          />
          <p className="error-text">{errors.email}</p>
        </label>
        <label htmlFor='password' className="sign__label">
          <p className="sign__heading">Пароль</p>
          <input type="password" id="password" className="sign__field"
          name="password"
          required
          value={values.password || ''}
          onChange={handleChange}
          />
          <p className="error-text">{errors.password}</p>
        </label>
      </>
    } onSubmit={handleSubmit} isValid={isValid} noAuth={noAuth} />
  );
}
