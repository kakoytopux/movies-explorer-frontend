import React, { useState } from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { movies } from '../../utils/const';
import './Movies.scss';
import Preloader from "../Preloader/Preloader";
import { moviesApi } from '../../utils/MoviesApi';

export default function Movies() {
  const [preloader, setPreloader] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  function getMoviesApi() {
    moviesApi.getMovies()
    .then(res => {
      setPreloader(false);
      setMoviesList(res);
      console.log(moviesList)
    })
    .catch(err => console.log(err))
    .finally(() => setPreloader(true))
  }
  function getMoviesSearch() {
    
  }

  return (
    <>
    <Header movies={true} />
    <main className="content">
      <SearchForm movies={getMoviesApi} />
      <MoviesCardList setPreloader={setPreloader} preloader={preloader} moviesList={moviesList} />
      <Preloader preloader={preloader} />
    </main>
    <Footer />
    </>
  );
}
