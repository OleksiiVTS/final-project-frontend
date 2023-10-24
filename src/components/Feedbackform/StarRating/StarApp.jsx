import React from 'react';
// import './Star/Star.css';
import StarRating from './StartRange';
import { Stars } from './Stars.styled';

const StarApp = ({ isActive, rating, getRating }) => {
  const onChangeRate = stars => {
    getRating(stars);
  };
  return (
    <Stars>
      {isActive ? (
        <StarRating
          starsSelected={rating}
          totalStars={5}
          onRate={onChangeRate}
        />
      ) : (
        <StarRating starsSelected={rating} totalStars={5} />
      )}
    </Stars>
  );
};

export default StarApp;
