import React from 'react'; 
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }
  
  return (
    <div className="page">
      <Header />
      <Main 
        onClickProfile={handleEditProfileClick}
        onClickAvatar={handleEditAvatarClick}
        onClickPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name='profile'
        type='edit'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
        >
          <input 
            name="userName" 
            type="text" 
            id="userName-input" 
            minLength="2" 
            maxLength="40" 
            className="popup__input popup__input_type_name"
            placeholder='Введите имя' required 
          />
          <span className="popup__error userName-input-error" ></span>
          <input 
            name="userAbout" 
            type="text" 
            id="userAbout-input" 
            minLength="2" 
            maxLength="200" 
            className="popup__input popup__input_type_info"
            placeholder='Введите профессию' required 
          />
          <span className="popup__error userAbout-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='card'
        type='add'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText='Создать'
        >
          <input 
            name="name" 
            type="text" 
            id="name-input" 
            minLength="2" 
            maxLength="30" 
            className="popup__input popup__input_type_name"
            placeholder='Название' 
            required 
          />
          <span className="popup__error name-input-error"></span>
          <input 
            name="link" 
            type="url" 
            id="link-input" 
            className="popup__input popup__input_type_url" 
            placeholder='Ссылка на картинку' 
            required 
          />
          <span className="popup__error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        type='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
        >
          <input 
            name="avatar" 
            type="url" 
            id="avatar-input" 
            className="popup__input popup__input_type_url" 
            placeholder='Ссылка на картинку' 
            required 
          />
          <span className="popup__error avatar-input-error"></span>
      </PopupWithForm>
    </div>
  );
}


export default App;