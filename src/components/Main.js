import { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    }).catch((error) => console.log(`Ошибка: ${error}`))

    api.getCards().then((data) => {
      setCards(data);
    }).catch((error) => console.log(`Ошибка: ${error}`))

  })

  return (
    <main>
      <section className="profile">
        <button
          type="button"
          onClick={props.onEditAvatar}
          className="profile__change-image-btn">
          <img src={userAvatar} className="profile__image" alt="аватар" />
        </button>
        <div className="profile__about">
          <div className="profile__name-and-button">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit"
              type="button"></button>
          </div>
          <p className="profile__who-is-this">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-new"
          type="button"></button>
      </section>

      <section>
        <ul className="elements">
          {cards.map(
            (card) => (<Card
              key={card._id}
              data={card}
              onCardClick={props.onCardClick}
              onClose={props.onClose}
            />)
          )}
        </ul>
      </section>

    </main>

  )
}

export default Main;
