import React from "react";

function Card({ card, image, likeCounter, onCardClick, title }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <article className="element">
            <img src={image}
                alt={title}
                className="element__picture"
                onClick={handleClick}
            />
            <div className="element__container">
                <h2 className="element__text">{title}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__button-like" />
                    <p className="element__like-count">{likeCounter}</p>
                </div>
            </div>
            <button type="button" className="element__button-delete" />
        </article>
    );
}

export default Card;