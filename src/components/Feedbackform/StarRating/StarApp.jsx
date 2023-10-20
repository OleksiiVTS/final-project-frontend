import React, { Component } from 'react';
// import './Star/Star.css';
import StarRating from './StartRange';
import {Stars} from './Stars.styled';

class StarApp extends Component {

    state = {
    starsSelected: 5,
  }

change=(starsSelected) => 
       this.setState({starsSelected});

  render() {
  	const starsSelected = this.state.starsSelected 
    return (
      <Stars>
      <StarRating starsSelected={starsSelected} totalStars={5} onRate={this.change} />
      </Stars>
    );
  }
}

export default StarApp;