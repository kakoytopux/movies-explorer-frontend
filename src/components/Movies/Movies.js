import React, { useState } from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { movies } from '../../utils/const';
import './Movies.scss';
import Preloader from "../Preloader/Preloader";

export default function Movies() {
  const [preloader, setPreloader] = useState(false);

  return (
    <>
    <Header movies={true} />
    <main className="content">
      <SearchForm />
      <MoviesCardList movies={movies} setPreloader={setPreloader} preloader={preloader} />
      <Preloader preloader={preloader} />
    </main>
    <Footer />
    </>
  );
}
