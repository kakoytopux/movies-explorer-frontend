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
import { currentUser } from '../../utils/context';

export default function App() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    mainApi.getUser()
    .then(res => setUserInfo(res))
    .catch(err => console.log(err));
  }, []);

  return (
    <currentUser.Provider value={userInfo}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </currentUser.Provider>
  );
}
