import React from 'react';
// import './Star/Star.css';
import StarRating from './StartRange';
import { Stars } from './Stars.styled';

const StarApp = ({ rating, getRating, isEditing, isReview }) => {
  const onChangeRate = stars => {
    getRating(stars);
  };
  return (
    <Stars>
      <StarRating starsSelected={rating} totalStars={5} onRate={onChangeRate} isEditing={isEditing} isReview={isReview}/>
    </Stars>
  );
};

export default StarApp;
