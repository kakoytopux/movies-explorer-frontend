import React, { useEffect, useState } from "react";
import './SavedMovies.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from "../Footer/Footer";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { mainApi } from '../../utils/MainApi';

export default function SavedMovies({ auth }) {
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [searchSavedMovies, setSearchSavedMovies] = useState(null);

  function setMoviesApi(field, checkbox) {
    setSearchSavedMovies(savedMoviesList.filter(item => item.nameRU === field));
  }

  useEffect(() => {
    mainApi.getLikeMovieUser()
    .then(res => {
      setSavedMoviesList(res.film);
    })
    .catch(err => console.log(err));
  }, []);
  
  function deleteLikeSavedMovies(res) {
    setSavedMoviesList(savedMoviesList.filter(item => item.movieId !== res.item.movieId));
  }

  return (
    <>
    <Header movies={true} auth={auth} />
    <main className="content content-movies">
      <SearchForm movies={setMoviesApi} />
      <MoviesCardList
      moviesList={searchSavedMovies ?? savedMoviesList}
      savedMovies={true}
      deleteLikeSavedMovies={deleteLikeSavedMovies}
      />
    </main>
    <Footer />
    </>
  );
}
