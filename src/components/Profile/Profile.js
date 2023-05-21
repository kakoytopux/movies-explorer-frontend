import React, { useContext, useState } from "react";
import './Profile.scss';
import Header from "../Header/Header";
import { currentUser } from '../../Contexts/context';
import { mainApi } from "../../utils/MainApi";

export default function Profile({ auth, setAuth }) {
  const { user } = useContext(currentUser);
  const [disabled, setDisabled] = useState(true);
  const [nameVal, setNameVal] = useState(user.name);
  const [emailVal, setEmailVal] = useState(user.email);
  const [userInfo, setUserInfo] = useState(user);

  function exitProfile() {
    mainApi.exitProfile()
    .then(() => setAuth(false))
    .catch(err => console.log(err));
  }

  function editProfile() {
    if(disabled) {
      setDisabled(false);
    } else {
      if(nameVal === userInfo.name && emailVal === userInfo.email) {
        setDisabled(true);
      }
    }
  }

  function setNameUser(evt) {
    setNameVal(evt.target.value);
  }
  function setNameEmail(evt) {
    setEmailVal(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();

    if(!disabled) {
      if(nameVal !== userInfo.name || emailVal !== userInfo.email) {
        mainApi.editProfile({ name: nameVal, email: emailVal })
        .then(res => {
          setUserInfo(res.user);
          setDisabled(true);
        })
        .catch(err => console.log(err));
      }
    }
  }

  return (
    <>
    <Header movies={true} auth={auth} />
    <main className="content">
      <section className="profile">
        <h1 className="profile__title">Привет, {userInfo.name}!</h1>
        <form method="post" className="profile__form" name="edit" onSubmit={handleSubmit}>
          <div className="profile__container">
            <p className="profile__text profile__text_type_bold">Имя</p>
            <input type="text" required disabled={disabled} className="profile__field profile__text"
            value={nameVal}
            name="name"
            onChange={setNameUser}
            />
          </div>
          <div className="profile__container">
            <p className="profile__text profile__text_type_bold">E-mail</p>
            <input type="email" required disabled={disabled} className="profile__field profile__text"
            value={emailVal}
            name="email"
            onChange={setNameEmail}
            />
          </div>
          <div className="profile__box">
            <button type={disabled ? 'button' : 'submit'} className={`profile__btn ${disabled ? '' : 'profile__btn_active'}`} onClick={editProfile}>Редактировать</button>
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
