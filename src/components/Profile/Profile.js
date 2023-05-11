import React from "react";
import './Profile.scss';
import Header from "../Header/Header";

export default function Profile() {
  return (
    <>
    <Header movies={true} />
    <main className="content">
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__container">
          <p className="profile__text profile__text_type_bold">Имя</p>
          <p className="profile__text">Виталий</p>
        </div>
        <div className="profile__container">
          <p className="profile__text profile__text_type_bold">E-mail</p>
          <p className="profile__text">pochta@yandex.ru</p>
        </div>
        <div className="profile__box">
          <button type="button" className="profile__btn">Редактировать</button>
          <button type="button" className="profile__btn profile__btn_type_exit">Выйти из аккаунта</button>
        </div>
      </section>
    </main>
    </>
  );
}
