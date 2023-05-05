import React from "react";
import './SearchForm.scss';
import { useState } from "react";

export default function SearchForm() {
  const [checked, setChecked] = useState(true);

  function setCheckbox() {
    setChecked(!checked);
  }
  
  return (
    <section className="search indent-section">
      <form className="search__form" method="post" name="search">
        <div className="search__container-field">
          <input type="text" placeholder="Фильм" className="search__field" name="movies" required />
          <button type="submit" className="search__submit"></button>
        </div>
        <div className="search__container-checkbox">
          <input type="checkbox" className="search__checkbox" name="short" id="short"
          checked={checked ? true : false}
          onClick={setCheckbox}
          />
          <label for="short" className="search__checkbox-custom"></label>
          <label for="short" className="search__short-films">Короткометражки</label>
        </div>
      </form>
    </section>
  );
}
