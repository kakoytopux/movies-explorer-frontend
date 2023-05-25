import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import './Movies.scss';
import Preloader from "../Preloader/Preloader";
import { moviesApi } from '../../utils/MoviesApi';
import { getItemFilter } from '../../utils/utils';

export default function Movies({ auth }) {
  const [preloader, setPreloader] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [moviesMess, setMoviesMess] = useState('');

  function setMoviesData(item) {
    setMoviesMess('');
    setMoviesList(prevMoviesList => {
      const newMovieList = [...prevMoviesList, item]
      sessionStorage.setItem('film', JSON.stringify(newMovieList));

      return newMovieList;
    });
  }
  function setMoviesDataNotFound(text) {
    setMoviesList([]);
    sessionStorage.removeItem('film');
    setMoviesMess(text);
  }

  function setMoviesApi(field, checkbox) {
    setPreloader(true);
    setMoviesDataNotFound('');

    const moviesStorage = JSON.parse(sessionStorage.getItem('movies'));

    if(moviesStorage) {
      setTimeout(() => {
        setMoviesFound(moviesStorage, field, checkbox);
        setPreloader(false);
      }, 1000);
    } else {
      moviesApi.getMovies()
      .then(res => {
        setMoviesFound(res, field, checkbox);
        sessionStorage.setItem('movies', JSON.stringify(res));
      })
      .catch(() => setMoviesDataNotFound('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
      .finally(() => setPreloader(false));
    }
  }

  function setMoviesFound(res, field, checkbox) {
    setMoviesDataNotFound('Ничего не найдено.');

    res.forEach(item => {
      const resItemFilter = getItemFilter(field, item);

      if(resItemFilter && checkbox === true && item.duration <= 40) {
        setMoviesData(item);
        return;
      }
      if(resItemFilter && checkbox === false && item.duration > 40) {
        setMoviesData(item);
        return;
      }
    });
  }

  useEffect(() => {
    const film = JSON.parse(sessionStorage.getItem('film'));

    if(film !== null) {
      setMoviesList(film);
    }
  }, []);

  return (
    <>
    <Header movies={true} auth={auth} />
    <main className={`content ${moviesList.length > 0 ? '' : 'content_type_movies'}`}>
      <SearchForm movies={setMoviesApi} />
      <MoviesCardList
      setPreloader={setPreloader}
      preloader={preloader}
      moviesList={moviesList}
      moviesMess={moviesMess}
      />
      <Preloader preloader={preloader} />
    </main>
    <Footer />
    </>
  );
}
