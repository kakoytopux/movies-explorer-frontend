import React, { useContext, useEffect, useState } from "react";
import './Profile.scss';
import Header from "../Header/Header";
import { CurrentUser } from '../../contexts/CurrentUser';
import { mainApi } from "../../utils/MainApi";
import { useFormWithValidation } from '../useForm/useForm';

export default function Profile({ auth, setAuth }) {
  const { user } = useContext(CurrentUser);
  const [noEdit, setNoEdit] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [successEdit, setSuccessEdit] = useState(false);
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormWithValidation();

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  useEffect(() => {
    setValues(userInfo);
  }, [setValues, userInfo]);

  useEffect(() => {
    setNoEdit(true);
  }, [values]);

  useEffect(() => {
    if(values?.name === userInfo?.name && values?.email === userInfo?.email) {
      setIsValid(false);
    }
  }, [values, disabled, userInfo?.name, userInfo?.email, setIsValid]);

  useEffect(() => {
    setTimeout(() => {
      setSuccessEdit(false);
    }, 2000);
  }, [successEdit]);

  function exitProfile() {
    mainApi.exitProfile()
    .then(() => {
      setAuth(false);
      sessionStorage.clear();
    })
    .catch(err => console.log(err));
  }

  function editProfile() {
    if(disabled) {
      setDisabled(false);
    } else {
      if(values.name === userInfo.name && values.email === userInfo.email) {
        setDisabled(true);
      }
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    setNoEdit(true);

    if(!disabled) {
      if(values.name !== userInfo.name || values.email !== userInfo.email) {
        mainApi.editProfile({ name: values.name, email: values.email })
        .then(res => {
          setUserInfo(res.user);
          setDisabled(true);
          setIsValid(false);
          setSuccessEdit(true);
        })
        .catch(() => setNoEdit(false));
      }
    }
  }

  return (
    <>
    <Header movies={true} auth={auth} />
    <main className="content">
      <section className="profile">
        <h1 className="profile__title">Привет, {userInfo?.name}!</h1>
        <form method="post" className="profile__form" name="edit" noValidate onSubmit={handleSubmit}>
          <div className="profile__container">
            <p className="profile__text profile__text_type_bold">Имя</p>
            <label className="profile__label" htmlFor="name">
              <input type="text" required disabled={disabled} className="profile__field profile__text"
              value={values?.name || ''}
              name="name"
              id="name"
              onChange={handleChange}
              />
              <p className="error-text error-text_type_profile">{errors.name}</p>
            </label>
          </div>
          <div className="profile__container">
            <p className="profile__text profile__text_type_bold">E-mail</p>
            <label className="profile__label" htmlFor="email">
              <input type="email" required disabled={disabled} className="profile__field profile__text"
              value={values?.email || ''}
              name="email"
              id="email"
              onChange={handleChange}
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              />
              <p className="error-text error-text_type_profile">{errors.email}</p>
            </label>
          </div>
          <p className="error-text">{!noEdit && 'Что-то пошло не так...'}</p>
          <div className="profile__box">
            <p className={`profile__success ${successEdit ? 'profile__success_active' : ''}`}>{successEdit ? 'Профиль успешно изменен!' : ''}</p>
            <button type={disabled ? 'button' : 'submit'} disabled={!disabled && !isValid} className={`profile__btn ${disabled ? '' : 'profile__btn_active'}`} onClick={editProfile}>{disabled ? 'Редактировать' : 'Сохранить'}</button>
            {disabled &&
            <button type="button" className="profile__btn profile__btn_type_exit" onClick={exitProfile}>Выйти из аккаунта</button>
            }
          </div>
        </form>
      </section>
    </main>
    </>
  );
}
