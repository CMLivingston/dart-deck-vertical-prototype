import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

export default class DeckEditor extends Component {

  goHome() {
    browserHistory.push('/home');
  }

	render() {
    return (
      <div>
        <div className="menu">
          <h2>
            DartDeck - Review Mode 
          </h2>
          <button onClick={this.goHome.bind(this)} className="inline">Home</button>
        </div>
      </div>
    );
  }
}