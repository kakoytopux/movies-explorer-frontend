class MainApi {
  _getResult(res) {
    if(!res.ok) {
      return Promise.reject(`Ошибка: ${res.status + ' ' + res.statusText}`);
    }

    return res.json();
  }
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
    .then(res => this._getResult(res))
  }
  loginUser({ email, password }) {
    return fetch('https://movies-explorer-pux.nomoredomains.monster/api/signin', {
      method: 'POST',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(res => this._getResult(res))
  }
  exitProfile() {
    return fetch('https://movies-explorer-pux.nomoredomains.monster/api/signout', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => this._getResult(res))
  }
  getUser() {
    return fetch(`https://movies-explorer-pux.nomoredomains.monster/api/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => this._getResult(res))
  }
  editProfile({ name, email }) {
    return fetch(`https://movies-explorer-pux.nomoredomains.monster/api/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
    .then(res => this._getResult(res))
  }
  getLikeMovieUser() {
    return fetch('https://movies-explorer-pux.nomoredomains.monster/api/movies', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => this._getResult(res))
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
    .then(res => this._getResult(res))
  }
  deleteLikeMovieUser({ _id }) {
    return fetch(`https://movies-explorer-pux.nomoredomains.monster/api/movies/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => this._getResult(res))
  }
}

export const mainApi = new MainApi();
