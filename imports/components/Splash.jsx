import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Splash extends Component {
  render() {
    return (
      <div>
        <h2>
          DartDecks
        </h2>
        <hr></hr>
        <p>Hello, World!</p>
      </div>
    );
  }
}
