import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(data) {
    setSelectedCard({ ...data, isOpen: true });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAddClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function allPopupsClose() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleEditAddClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={allPopupsClose}
      >
        <input
          id="name-input"
          autoComplete="off"
          type="text"
          required
          placeholder="Имя"
          name="name"
          className="popup__input popup__input_name"
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error name-input-error"></span>
        <input
          id="about-input"
          autoComplete="off"
          type="text"
          required
          placeholder="Профессия"
          name="about"
          className="popup__input popup__input_about"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error about-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="place"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={allPopupsClose}
      >
        <input
          id="place-name-input"
          autoComplete="off"
          type="text"
          required
          name="name"
          placeholder="Название"
          className="popup__input popup__input_card-name"
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error place-name-input-error"></span>
        <input
          id="photo-link-input"
          autoComplete="off"
          type="url"
          required
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_photo-link"
        />
        <span className="popup__input-error photo-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={allPopupsClose}
      >
        <input
          id="avatar-input"
          autoComplete="off"
          type="url"
          required
          name="avatar"
          placeholder="Ссылка на картинку"
          className="popup__input popup__avatar-input"
        />
        <span className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={allPopupsClose} />
      
    </div>
  );
}

export default App;
