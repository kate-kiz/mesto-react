import React from 'react';
import editAvatarButton from '../images/pen.svg';
import editButton from '../images/edit_button.svg';
import addButton from '../images/add_button.svg';
import Card from './Card';
import api from '../utils/Api';

function Main({ onAddPlace, onCardClick, onEditAvatar, onEditProfile }) {
    const [cards, setCards] = React.useState([]);
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        api.getInitialCards()
            .then(result => {
                setCards(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    React.useEffect(() => {
        api.getUserInfo()
            .then(result => {
                setUserName(result.name)
                setUserDescription(result.about)
                setUserAvatar(result.avatar)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [userName, userDescription, userAvatar])


    return (
        <main>
            <section className="profile">
                <div className="profile__avatar">
                    <img src={userAvatar} className="profile__image" alt={userName} />
                    <button className="profile__edit-avatar" type="button" onClick={onEditAvatar}>
                        <img
                            className="profile__pen"
                            src={editAvatarButton}
                            alt="Карандаш"
                        />
                    </button>
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                            <img
                                src={editButton}
                                className="profile__edit-logo"
                                alt="Плюс"
                            />
                        </button>
                    </div>
                    <p className="profile__text">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}>
                    <img
                        src={addButton}
                        className="profile__add-logo"
                        alt="Плюс"
                    />
                </button>
            </section>
            <section className="elements">
                {cards.map((card) => {
                    return (<Card
                        card={card}
                        key={card._id}
                        title={card.name}
                        likeCounter={card.likes.length}
                        image={card.link}
                        onCardClick={onCardClick}
                    />)
                })}
            </section>
        </main>

    );
}

export default Main;