import React from 'react';
import './MoviesCardList.scss';
import { arrCards } from '../../utils/const';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (
    <section className='cards indent-section'>
      <div className='cards__container'>
        {arrCards.map((card, i) => 
          <MoviesCard key={i} card={card} />
        )}
      </div>
      <button type='button' className='cards__btn'>Ещё</button>
    </section>
  );
}
