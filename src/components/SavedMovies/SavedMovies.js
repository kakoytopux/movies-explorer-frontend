import React, { useEffect, useState } from "react";
import './SavedMovies.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from "../Footer/Footer";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { mainApi } from '../../utils/MainApi';
import { getItemFilter } from '../../utils/utils';

export default function SavedMovies({ auth }) {
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [searchSavedMovies, setSearchSavedMovies] = useState(null);
  const [moviesMess, setMoviesMess] = useState('');

  function setMoviesData(item) {
    setSearchSavedMovies(prevMoviesList => [...prevMoviesList, item]);
    setMoviesMess('');
  }
  function setMoviesDataNotFound(text) {
    setSearchSavedMovies([]);
    setMoviesMess(text);
  }

  function setMoviesFound(field, checkbox) {
    setMoviesDataNotFound('Ничего не найдено.');

    savedMoviesList.forEach(item => {
      const resItemFilter = getItemFilter(field, item);

      if(resItemFilter && checkbox === true && item.duration <= 40) {
        setMoviesData(item);
      }
      if(resItemFilter && checkbox === false && item.duration > 40) {
        setMoviesData(item);
      }
    });
  }

  useEffect(() => {
    mainApi.getLikeMovieUser()
    .then(res => setSavedMoviesList(res.film))
    .catch(() => setMoviesDataNotFound('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'));
  }, []);
  
  function deleteLikeSavedMovies(res) {
    setSavedMoviesList(savedMoviesList.filter(item => item.movieId !== res.item.movieId));
  }

  return (
    <>
    <Header movies={true} auth={auth} />
    <main className={`content ${searchSavedMovies === null ? '' : searchSavedMovies.length > 0 ? '' : 'content_type_movies'}`}>
      <SearchForm movies={setMoviesFound} savedMovies={true} />
      <MoviesCardList
      moviesList={searchSavedMovies ?? savedMoviesList}
      savedMovies={true}
      deleteLikeSavedMovies={deleteLikeSavedMovies}
      moviesMess={moviesMess}
      />
    </main>
    <Footer />
    </>
  );
}
