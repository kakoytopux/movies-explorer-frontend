import React from "react";
import './SavedMovies.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from "../Footer/Footer";
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies() {
  return (
    <>
    <Header movies={true} />
    <main className="content content-movies">
      <SearchForm />
      <MoviesCardList moviesList={[]} savedMovies={true} />
    </main>
    <Footer />
    </>
  );
}
