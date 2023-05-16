import React from 'react';

function PopupWithForm({ name, title, buttonText, children, isOpen, onClose }) {
    return (
        <div className={`popup popup_${name} ${isOpen ? `popup_opened` : ``}`}>
            <div className="popup__place-container">
                <button className="popup__button-close" type="button" onClick={onClose} />
                <h2 className="popup__header">{title}</h2>
                <form
                    className="popup__form"
                    name={name}
                    id="popup__form_places"
                    noValidate=""
                >
                    {children}
                </form>
                <button className="popup__button" type="submit" form="popup__form_places">
                    {buttonText}
                </button>
            </div>
        </div>

    );
}

export default PopupWithForm;