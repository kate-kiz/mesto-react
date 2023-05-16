
export const initialCards = [
    {
        name: 'Гейзерное озеро',
        link: 'https://images.unsplash.com/photo-1635445922254-afe76e74b29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    },
    {
        name: 'Акташ',
        link: 'https://images.unsplash.com/photo-1634876371441-826b86b49f74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
        name: 'Актуру',
        link: 'https://images.unsplash.com/photo-1634876371520-1b46ff7def12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80'
    },
    {
        name: 'Каракольские озера',
        link: 'https://images.unsplash.com/photo-1635538366941-9b2798c92712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
    },
    {
        name: 'Катунь',
        link: 'https://images.unsplash.com/photo-1634876371547-efe7a8dba7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
        name: 'Чике-Таман',
        link: 'https://images.unsplash.com/photo-1632336544277-33520e446986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
    },
];

export const templateSelector = document.querySelector("#element-template");

export const containerSelector = ".elements";
export const popupSelector = ".popup";
export const profilePopupSelector = '.popup_edit-profile';
export const profilePopup = document.querySelector(profilePopupSelector);
export const popupFormElement = profilePopup.querySelector('.popup__form');
export const popupFormNameInput = profilePopup.querySelector('.popup__input_type_name');
export const popupFormJobInput = profilePopup.querySelector('.popup__input_type_profession');

export const editButton = document.querySelector('.profile__edit-button');

export const profileNameElement = document.querySelector('.profile__name');
export const jobNameElement = document.querySelector('.profile__text');


export const popupAddCardSelector = ".popup_new-place";
export const popupAddCard = document.querySelector(popupAddCardSelector);
export const buttonAddCard = document.querySelector(".profile__add-button");
export const formAddCard = popupAddCard.querySelector(".popup__form")
export const nameInputAddCard = popupAddCard.querySelector(".popup__input_type_name");
export const linkInputAddCard = popupAddCard.querySelector(".popup__input_type_link");

export const fullImagePopupSelector = ".popup_places";
export const fullImagePopup = document.querySelector(fullImagePopupSelector);
export const popupImage = document.querySelector(".popup__picture");
export const popupName = document.querySelector(".popup__image-caption");

export const popupUpdateAvatarSelector = ".popup_update-avatar";
export const popupUpdateAvatar = document.querySelector(popupUpdateAvatarSelector);
export const formUpdateAvatar = popupUpdateAvatar.querySelector(".popup__form");
export const buttonUpdateAvatar = document.querySelector(".profile__edit-avatar");

export const popupConfirmSelector = ".popup_confirm";
export const popupConfirm = document.querySelector(popupConfirmSelector);
export const buttonConfirmDelete = document.querySelector(".popup__button_confirm");

// export const token = 'e24a5663-2327-4061-8ac2-635e8dfeb3de';

export const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputSectionSelector: '.popup__section',
    inputErrorSelector: '.popup__error',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};
