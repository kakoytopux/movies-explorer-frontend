import React, { useState } from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import './Movies.scss';
import Preloader from "../Preloader/Preloader";
import { moviesApi } from '../../utils/MoviesApi';

export default function Movies() {
  const [preloader, setPreloader] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [moviesMess, setMoviesMess] = useState('');

  function setMoviesData(item) {
    setMoviesMess('');
    setMoviesList([item]);
  }
  function setMoviesDataNotFound(text) {
    setMoviesList([]);
    setMoviesMess(text);
  }
  function setMoviesApi(field, checkbox) {
    setPreloader(true);
    setMoviesDataNotFound('');

    moviesApi.getMovies()
    .then(res => {
      setMoviesFound(res, field, checkbox);
    })
    .catch(() => setMoviesDataNotFound('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
    .finally(() => setPreloader(false));
  }
  function setMoviesFound(res, field, checkbox) {
    setMoviesDataNotFound('Ничего не найдено.');
    
    res.filter(item => {
      if(field === item.nameRU && checkbox === true && item.duration <= 40) {
        setMoviesData(item);
        return true;
      }
      if(field === item.nameRU && checkbox === false && item.duration > 40) {
        setMoviesData(item);
        return true;
      }
      
      return false;
    });
  }

  return (
    <>
    <Header movies={true} />
    <main className="content content-movies">
      <SearchForm movies={setMoviesApi} />
      <MoviesCardList
      setPreloader={setPreloader}
      preloader={preloader}
      moviesList={moviesList}
      moviesMess={moviesMess} />
      <Preloader preloader={preloader} />
    </main>
    <Footer />
    </>
  );
}
