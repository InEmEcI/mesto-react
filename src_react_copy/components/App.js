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
  const [selectedCard, setSelectedCard] = useState({})

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
        <input id="name-input" autocomplete="off" type="text" required placeholder="Имя" name="name"
          class="popup__input popup__input_name" minlength="2" maxlength="40" />
        <span class="popup__input-error name-input-error"></span>
        <input id="about-input" autocomplete="off" type="text" required placeholder="Профессия" name="about"
          class="popup__input popup__input_about" minlength="2" maxlength="200" />
        <span class="popup__input-error about-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="place"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={allPopupsClose}
      >
        <input id="place-name-input" autocomplete="off" type="text" required name="name" placeholder="Название"
          class="popup__input popup__input_card-name" minlength="2" maxlength="30" />
        <span class="popup__input-error place-name-input-error"></span>
        <input id="photo-link-input" autocomplete="off" type="url" required name="link" placeholder="Ссылка на картинку"
          class="popup__input popup__input_photo-link" />
        <span class="popup__input-error photo-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={allPopupsClose}
      >
        <input id="avatar-input" autocomplete="off" type="url" required name="avatar" placeholder="Ссылка на картинку"
          class="popup__input popup__avatar-input" />
        <span class="popup__input-error avatar-input-error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={allPopupsClose}
      />

    </div>

  );
}

export default App;
