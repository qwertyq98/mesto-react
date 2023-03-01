import React from 'react'; 

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card); 
  };

  return (
    <div className="element">
      <button className="element__trash" type="button"></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__title-wrapper">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-wrapper">
          <button type="button" className="element__like"></button>
          <span className="element__like_value">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;