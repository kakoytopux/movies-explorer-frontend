import React, { useState } from "react";
import './SearchForm.scss';

export default function SearchForm({ movies }) {
  const [checked, setChecked] = useState(true);
  const [onFocusField, setOnFocusField] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [errValid, setErrValid] = useState('');

  function setCheckbox(evt) {
    setChecked(evt.target.checked);
  }
  function handleChange(evt) {
    setSearchVal(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    
    if(!searchVal) {
      setErrValid('Нужно ввести ключевое слово.');
      return;
    }
    setErrValid('');
    movies(searchVal, checked);
  }
  function setFocusField() {
    setOnFocusField(!onFocusField);
  }

  return (
    <section className="search indent-section">
      <form className="search__form" method="post" name="search" noValidate onSubmit={handleSubmit}>
        <div className={`search__container-field ${onFocusField ? 'search__container-field_focus' : ''}`}>
          <input type="text" placeholder="Фильм" onFocus={setFocusField} onBlur={setFocusField} className="search__field" name="movies" required value={searchVal} onChange={handleChange} />
          <button type="submit" className="search__submit"></button>
          <span className="search__err">{errValid}</span>
        </div>
        <div className="search__container-checkbox">
          <input type="checkbox" className="search__checkbox" name="short" id="short"
          checked={checked}
          onChange={setCheckbox}
          />
          <label htmlFor="short" className="search__checkbox-custom"></label>
          <label htmlFor="short" className="search__short-films">Короткометражки</label>
        </div>
      </form>
    </section>
  );
}
