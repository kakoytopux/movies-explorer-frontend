import React from "react";
import './SavedMovies.scss';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from "../Footer/Footer";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/const';

export default function SavedMovies() {
  return (
    <>
    <Header movies={true} />
    <main className="content">
      <SearchForm />
      <MoviesCardList movies={savedMovies} savedMovies={true} />
    </main>
    <Footer />
    </>
  );
}
