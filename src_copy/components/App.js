import React, { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
// import ImagePopup from "./ImagePopup";

function App() {

const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

function handleEditProfileClick (){
  setIsEditProfilePopupOpen(true);
} 

function handleEditAddClick (){
  setIsAddPlacePopupOpen(true);
} 

function handleEditAvatarClick (){
  setIsEditAvatarPopupOpen(true);
} 

function allPopupsClose(){
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setIsEditAvatarPopupOpen(false);
}

  return (    
    <div className="page">
      <Header />
      <Main 
      onEditProfile = {handleEditProfileClick}
      />
      <Footer />
      <PopupWithForm 
      name = "profile"
      title = "Редактировать профиль"
      isOpen = {isEditProfilePopupOpen}
      onClose = {allPopupsClose}      
      >
        <input id="name-input" autocomplete="off" type="text" required placeholder="Имя" name="name"
          class="popup__input popup__input_name_name" minlength="2" maxlength="40" />
        <span class="popup__input-error name-input-error"></span>

        <input id="about-input" autocomplete="off" type="text" required placeholder="Профессия" name="about"
          class="popup__input popup__input_name_who-is-this" minlength="2" maxlength="200" />
        <span class="popup__input-error about-input-error"></span>
        </PopupWithForm> 

        {/* <PopupWithForm
        name = "profile"
        title = "Редактировать профиль"
        isOpen = {isEditProfilePopupOpen}
        onClose = {allPopupsClose}    
        >

        </PopupWithForm>  */}




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
