import React from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function Movies() {
  return (
    <>
    <Header movies={true} />
    <main className="content">
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
    </>
  );
}
