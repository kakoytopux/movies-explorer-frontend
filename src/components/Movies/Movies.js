import React from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";

export default function Movies() {
  return (
    <>
    <Header movies={true} />
    <main className="content">
      <SearchForm />
    </main>
    </>
  );
}
