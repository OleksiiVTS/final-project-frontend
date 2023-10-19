import React, { Component } from 'react';
import './Star/Star.css';
import StarRating from './StartRange';

class StarApp extends Component {

    state = {
    starsSelected: 5,
  }

change=(starsSelected) => 
       this.setState({starsSelected});

  render() {
  	const starsSelected = this.state.starsSelected 
    return (
      <div className="App">
      <StarRating starsSelected={starsSelected} totalStars={5} onRate={this.change} />
      </div>
    );
  }
}

export default StarApp;