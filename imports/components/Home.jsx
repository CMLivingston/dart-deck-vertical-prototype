import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Splash extends Component {
  render() {
    return (
      <div>
        <h2>
          DartDeck - Home
        </h2>
        <hr></hr>
        <p>Deck List View should go somewhere in this component!</p>
      </div>
    );
  }
}
