import React, { useState, useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { mainApi } from '../../utils/MainApi';
import { currentUser } from '../../Contexts/context';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    mainApi.getUser()
    .then(res => {
      setUserInfo(res);
      setLogin();
    })
    .catch(err => console.log(err));
  }, []);

  function setLogin() {
    setAuth(true);
  }

  return (
    <currentUser.Provider value={userInfo}>
      <Routes>
        <Route path='/' element={<Main auth={auth} />} />
        <Route path='/movies' element={<ProtectedRoute auth={auth} element={Movies} />} />
        <Route path='/saved-movies' element={<ProtectedRoute auth={auth} element={SavedMovies} />} />
        <Route path='/profile' element={<ProtectedRoute auth={auth} setAuth={setAuth} element={Profile} />} />
        <Route path='/signin' element={<Login login={setLogin} />} />
        <Route path='/signup' element={<Register login={setLogin} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </currentUser.Provider>
  );
}
