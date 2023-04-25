// import React, { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <section className="popup popup_profile"> 
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <form name="form-about" action="#" className="popup__form-about popup__form_profile popup__form" novalidate>
        <input id="name-input" autocomplete="off" type="text" required placeholder="Имя" name="name"
          className="popup__input popup__input_name_name" minlength="2" maxlength="40" />
        <span className="popup__input-error name-input-error"></span>
        <input id="about-input" autocomplete="off" type="text" required placeholder="Профессия" name="about"
          className="popup__input popup__input_name_who-is-this" minlength="2" maxlength="200" />
        <span className="popup__input-error about-input-error"></span>
        <button className="popup__save popup__save-userinfo" type="submit">Сохранить</button>
      </form>
    </div>
  </section>

  <section className="popup popup-avatar">
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form name="avatar-form" action="#" className="popup__form popup__avatar-edit" novalidate>
        <input id="avatar-input" autocomplete="off" type="url" required name="avatar" placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_photo-link" />
      <span className="popup__input-error avatar-input-error"></span>
      <button className="popup__save popup__save-avatar" type="submit">Сохранить</button>
      </form>
    </div>
  </section>

  <section className="popup popup-card-del"> 
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title popup__title_confirmation">Вы уверены?</h2>
      <form action="#" className="popup__form">
        <button className="popup__save" type="submit">Да</button>
      </form>
    </div>
  </section>

  <section className="popup popup_new-card"> 
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Новое место</h2>
      <form name="form-place" action="#" className="popup__form-about popup__form-about_new-form-about popup__form">
        <input id="place-name-input" autocomplete="off" type="text" required name="name" placeholder="Название"
          className="popup__input popup__input_type_card-name" minlength="2" maxlength="30" />
        <span className="popup__input-error place-name-input-error"></span>
        <input id="photo-link-input" autocomplete="off" type="url" required name="link" placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_photo-link" />
        <span className="popup__input-error photo-link-input-error"></span>
        <button className="popup__save popup__save-card" type="submit">Создать</button>
      </form>
    </div>
  </section>

  <section className="popup popup-card-image"> 
    <figure className="popup-card-image__figure">
      <button className="popup__close" type="button"></button>
      <img src="#" alt="#" className="popup-card-image__photo" />
      <figcaption className="popup-card-image__figcaption"></figcaption>
    </figure>
  </section>

  {/* <template id="template-card" className="template-card"> 
    <li className="element">
      <img src="#" alt="#" className="element__image" />
      <button className="element__trash" type="button"></button>
      <div className="element__title-and-like">
        <h2 className="element__title"></h2>
        <div className="element__like-and-counter">
          <button className="element__like" type="button"></button>
          <span className="element__like-counter">0</span>
        </div>
      </div>
    </li>
  </template>  */}


    </div>
  
  );
}

export default App;
