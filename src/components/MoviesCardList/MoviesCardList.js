import React from 'react';
import './MoviesCardList.scss';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';

export default function MoviesCardList({ savedMovies, setPreloader, preloader, moviesList }) {
  const [numberCards, setNumberCards] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 500);
    }
    
    if(width >= 1280) {
      setNumberCards(12);
    } else if (width >= 481) {
      setNumberCards(8);
    } else {
      setNumberCards(5);
    }
  }, [width]);

  function showCards() {
    setPreloader(true);

    setTimeout(() => {
      width >= 1280 ? setNumberCards(numberCards + 3) : setNumberCards(numberCards + 2);
      setPreloader(false);
    }, 1500);
  }

  return (
    <section className={`cards ${savedMovies ? 'cards_type_saved' : ''}`}>
      <div className='cards__container'>
        {moviesList.slice(0, savedMovies ? Infinity : numberCards).map(card =>
          <MoviesCard key={card.id} card={card} savedMovies={savedMovies} />
        )}
      </div>
      {!savedMovies &&
      <button type='button' className={`cards__btn ${preloader ? 'cards__btn_hidden' : ''}`}
      onClick={showCards}>Ещё</button>}
    </section>
  );
}
