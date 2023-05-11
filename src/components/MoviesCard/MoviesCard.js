import React from 'react';
import './MoviesCard.scss';
import { useState } from 'react';

export default function MoviesCard({ card, savedMovies }) {
  const [like, setLike] = useState(false);

  function changeLike() {
    if (!savedMovies) {
      setLike(!like);
    }
  }

  return (
    <article className='card'>
      <img src={card.link} alt={card.name} className='card__img' />
      <div className={`card__container ${savedMovies ? 'card__container_saved' : ''}`}>
        <div className='card__box'>
          <h2 className='card__title'>{card.name}</h2>
          <button type='button' className={`card__btn ${savedMovies ? 'card__btn_type_del' : 'card__btn_type_like'} ${like ? 'card__btn_type_like-active' : ''}`}
          onClick={changeLike}></button>
        </div>
        <p className='card__time'>{card.time}</p>
      </div>
    </article>
  );
}
