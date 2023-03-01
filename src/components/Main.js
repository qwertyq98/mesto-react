import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onClickAvatar, onClickProfile, onClickPlace, onCardClick}) {
  const [userName, setUserName] = React.useState(false);
  const [userDescription, setUserDescription] = React.useState(false);
  const [userAvatar, setUserAvatar] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar-wrapper">
          <img src={userAvatar} className="profile__avatar" alt="Аватар" />
          <button className="profile__button" onClick={onClickAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__content">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button-edit" type="button" onClick={onClickProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
          <button className="profile__button-add" type="button" onClick={onClickPlace}></button>
      </section>
      <section className="elements content__elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
