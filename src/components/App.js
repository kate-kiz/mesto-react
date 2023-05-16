import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';


function App() {

  const [iseditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };

  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImageOpen, setIsImageOpen] = React.useState(false);

  function handleCardClick(card) {
    setIsImageOpen(true)
    setSelectedCard(card)
  };

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImageOpen(false);
  }


  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={iseditProfilePopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__section">
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            id="name"
            placeholder="Имя"
            required=""
            minLength={2}
            maxLength={40}
          />
          <span className="popup__error" id="inputName-error" />
        </div>
        <div className="popup__section">
          <input
            className="popup__input popup__input_type_profession"
            type="text"
            name="job"
            id="text"
            placeholder="О себе"
            required=""
            minLength={2}
            maxLength={200}
          />
          <span className="popup__error" id="inputText-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        name='addCard'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__section">
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            id="title"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span className="popup__error" id="inputTitle-error" />
        </div>
        <div className="popup__section">
          <input
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            id="link"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__error" id="inputLink-error" />
        </div>
      </PopupWithForm>

      <ImagePopup
        isOpen={isImageOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />

      <PopupWithForm
        name='updateAvatar'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__section">
          <input
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            id="link-avatar"
            placeholder="Введите ссылку"
            required=""
          />
          <span className="popup__error" id="inputLink-error-avatar" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        name='confirmationPopup'
        title='Вы уверены?'
        isOpen={false}
        onClose={closeAllPopups}
        buttonText='Да'
      />
    </>

  );
}

export default App;
