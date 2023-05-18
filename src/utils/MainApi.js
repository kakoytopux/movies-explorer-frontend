class MainApi {
  registerUser({ name, email, password }) {
    return fetch('https://movies-explorer-pux.nomoredomains.monster/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
    .then(res => res.json())
  }
  loginUser({ email, password }) {
    return fetch('https://movies-explorer-pux.nomoredomains.monster/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(res => res.json())
  }
  getUser() {
    return fetch(`https://movies-explorer-pux.nomoredomains.monster/api/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
  }
  getLikeMovieUser() {
    return fetch('https://movies-explorer-pux.nomoredomains.monster/api/movies', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
  }
  likeMovieUser({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  }) {
    return fetch('https://movies-explorer-pux.nomoredomains.monster/api/movies', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: 'https://api.nomoreparties.co/' + image.url,
        trailerLink: trailerLink,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: 'https://api.nomoreparties.co/' + image.formats.thumbnail.url,
        movieId: id,
      }),
    })
    .then(res => res.json())
  }
  deleteLikeMovieUser({ _id }) {
    return fetch(`https://movies-explorer-pux.nomoredomains.monster/api/movies/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
  }
}

export const mainApi = new MainApi();
