import React from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return (
    <PopupWithForm
      name='avatar'
      type='avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}
      >
        <input 
          name="avatar" 
          type="url" 
          id="avatar-input" 
          className="popup__input popup__input_type_url" 
          placeholder='Ссылка на картинку' 
          required 
          ref={avatarRef}
        />
        <span className="popup__error avatar-input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;