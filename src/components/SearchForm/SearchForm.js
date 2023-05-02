import React from "react";
import './SearchForm.scss';

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input type="text" placeholder="Фильм" className="search__field" name="search" required />
        <button type="submit" className="search__submit"></button>
      </form>
    </section>
  );
}
