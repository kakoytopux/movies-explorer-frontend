import React, { useState, useEffect } from 'react';
import './MoviesCard.scss';
import { mainApi } from '../../utils/MainApi';

export default function MoviesCard({ card, savedMovies, deleteLikeSavedMovies }) {
  const [like, setLike] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  
  function getTimeMovies() {
    if(card.duration >= 60) {
      const hour = Math.floor((card.duration / 60)) + 'ч';
      return hour + ' ' + (card.duration - 60 + 'м');
    } else {
      return card.duration + 'м';
    }
  }

  function changeLike() {
    if(!like && !savedMovies) {
      mainApi.likeMovieUser(card)
      .then(() => setLike(true))
      .catch(err => console.log(err));
    } else {
      moviesList.forEach(item => {
        if(item.movieId === card.movieId || card.id) {
          mainApi.deleteLikeMovieUser(item)
          .then(res => {
            if(savedMovies) {
              deleteLikeSavedMovies(res);
            }
            
            setLike(false);
          })
          .catch(err => console.log(err));
        }
      });
    }
  }

  useEffect(() => {
    mainApi.getLikeMovieUser()
    .then(res => {
      setMoviesList(res.film);
    })
    .catch(err => console.log(err));
  }, [like]);

  useEffect(() => {
    moviesList.filter(item => item.movieId === card.id && setLike(true));
  }, [moviesList, card]);

  return (
    <article className='card'>
      <a href={card.trailerLink} className='card__trailer-link' target='_blank' rel="noreferrer">
      </a>
      <img src={savedMovies ? card.image : 'https://api.nomoreparties.co/' + card.image.url} alt={card.nameRU} className='card__img' />
      <div className={`card__container ${savedMovies ? 'card__container_saved' : ''}`}>
        <div className='card__box'>
          <h2 className='card__title'>{card.nameRU}</h2>
          <button type='button' className={`card__btn ${savedMovies ? 'card__btn_type_del' : 'card__btn_type_like'} ${like ? 'card__btn_type_like-active' : ''}`}
          onClick={changeLike}></button>
        </div>
        <p className='card__time'>{getTimeMovies()}</p>
      </div>
    </article>
  );
}
