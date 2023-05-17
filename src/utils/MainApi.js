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
}

export const mainApi = new MainApi();
