import React from 'react';
import './Rating.scss';

const Rating = ({ score }) => {
  return (
    <div className="rating" aria-label={`Note: ${score} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={`/assets/${star <= score ? 'star-active.png' : 'star-inactive.png'}`}
          alt={star <= score ? 'Étoile pleine' : 'Étoile vide'}
          className="rating-star"
        />
      ))}
    </div>
  );
};

export default Rating;