import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' Component={Main} />
      <Route path='/movies' Component={Movies} />
      <Route path='/saved-movies' Component={SavedMovies} />
      <Route path='/profile' Component={Profile} />
      <Route path='/signin' Component={Login} />
      <Route path='/signup' Component={Register} />
    </Routes>
    </>
  );
}
