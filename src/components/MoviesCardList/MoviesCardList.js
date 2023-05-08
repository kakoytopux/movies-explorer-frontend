import React from 'react';
import './MoviesCardList.scss';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies, savedMovies }) {
  return (
    <section className={`cards ${savedMovies ? 'cards_type_saved' : ''}`}>
      <div className='cards__container'>
        {movies.map((card, i) =>
          <MoviesCard key={i} card={card} savedMovies={savedMovies} />
        )}
      </div>
      {savedMovies ? '' : <button type='button' className='cards__btn'>Ещё</button>}
    </section>
  );
}
