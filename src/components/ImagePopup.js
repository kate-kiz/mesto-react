import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`popup popup_places ${props.isOpen ? `popup_opened` : ''}`}>
            <div className="popup__image-container">
                <button className="popup__button-close" type="button" onClick={props.onClose} />
                <img
                    src={props.card.link}
                    alt={props.card.name}
                    className="popup__picture"
                />
                <h3 className="popup__image-caption">{props.card.name}</h3>
            </div>
        </div>

    );
}

export default ImagePopup;