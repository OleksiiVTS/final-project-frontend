import React, { Component } from 'react';
// import './Star/Star.css';
import StarRating from './StartRange';
import { Stars } from './Stars.styled';

const StarApp = ({ rating, getRating }) => {
  const onChangeRate = stars => {
    getRating(stars);
  };
  return (
    <Stars>
      <StarRating starsSelected={rating} totalStars={5} onRate={onChangeRate} />
    </Stars>
  );
};

export default StarApp;
