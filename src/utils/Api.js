class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      metod: 'GET',
      headers: this.headers
    })
    .then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(this._checkResponse);
  }

  setUserInfoPopap(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.userName,
        about: data.userAbout
      })
    })
    .then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(this._checkResponse);
  }

  like(id) {
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this.headers,
    })
    .then(this._checkResponse);
  }

  deleteLike(_id) {
    return fetch(`${this.baseUrl}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(this._checkResponse);
  }

  changeUserAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'cd4002bc-1a30-4cb4-9d99-0b84c55f25d2',
    'Content-Type': 'application/json'
  }
});

export default api;