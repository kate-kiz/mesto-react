import React from "react";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element">
            <img src={props.image}
                alt={props.title}
                className="element__picture"
                onClick={handleClick}
            />
            <div className="element__container">
                <h2 className="element__text">{props.title}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__button-like" />
                    <p className="element__like-count">{props.likeCounter}</p>
                </div>
            </div>
            <button type="button" className="element__button-delete" />
        </article>
    );
}

export default Card;