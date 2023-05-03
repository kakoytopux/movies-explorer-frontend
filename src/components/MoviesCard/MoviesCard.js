import React from 'react';
import './MoviesCard.scss';
import { useState } from 'react';

export default function MoviesCard({ card }) {
  const [like, setLike] = useState(false);

  function changeLike() {
    setLike(!like);
  }

  return (
    <article className='card'>
      <img src={card.link} alt={card.name} className='card__img' />
      <div className='card__container'>
        <div className='card__box'>
          <h5 className='card__title'>{card.name}</h5>
          <div className={`card__like ${like && 'card__like_active'}`} onClick={changeLike}></div>
        </div>
        <p className='card__time'>{card.time}</p>
      </div>
    </article>
  );
}
