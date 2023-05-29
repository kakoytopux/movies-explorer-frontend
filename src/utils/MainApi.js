class MainApi {
  constructor(options) {
    this._defaultUrl = options.defaultUrl;
    this._headers = options.headers;
  }
  _getResult(res) {
    if(!res.ok) {
      return Promise.reject(`Ошибка: ${res.status + ' ' + res.statusText}`);
    }

    return res.json();
  }
  registerUser({ name, email, password }) {
    return fetch(`${this._defaultUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
    .then(res => this._getResult(res))
  }
  loginUser({ email, password }) {
    return fetch(`${this._defaultUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(res => this._getResult(res))
  }
  exitProfile() {
    return fetch(`${this._defaultUrl}/signout`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
    .then(res => this._getResult(res))
  }
  getUser() {
    return fetch(`${this._defaultUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
    .then(res => this._getResult(res))
  }
  editProfile({ name, email }) {
    return fetch(`${this._defaultUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
    .then(res => this._getResult(res))
  }
  getLikeMovieUser() {
    return fetch(`${this._defaultUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
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
    return fetch(`${this._defaultUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
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
    return fetch(`${this._defaultUrl}/movies/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
    .then(res => this._getResult(res))
  }
}

export const mainApi = new MainApi({
  defaultUrl: 'https://movies-explorer-pux.nomoredomains.monster/api',
  headers: {
    'Content-Type': 'application/json',
  }
});
