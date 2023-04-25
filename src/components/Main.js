// import avatar from '../images/kusto.jpg';
import api from '../utils/api';
import { useEffect, useState } from 'react';
import Card from './Card';

function Main() {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    }).
      catch((error) => { console.log(error) })

    api.getCards().then((data) => {
      setCards(data);
    }).
      catch((error) => { console.log(error) })
  })

  function handleEditAvatarClick() {
    document.querySelector('.popup-avatar').classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    document.querySelector('.popup_profile').classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    document.querySelector('.popup_new-card').classList.add('popup_opened');
  }
  return (
    <main>
      <section className="profile">
        <button
          type="button"
          onClick={handleEditAvatarClick}
          className="profile__change-image-btn">
          <img src={userAvatar} className="profile__image" alt="аватар" />
        </button>
        <div className="profile__about">
          <div className="profile__name-and-button">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={handleEditProfileClick}
              className="profile__edit"
              type="button"></button>
          </div>
          <p className="profile__who-is-this">{userDescription}</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="profile__add-new"
          type="button"></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((data) =>
            (<Card key={data._id} data={data} />)
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;
