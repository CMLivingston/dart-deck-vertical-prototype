import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

export default class DeckEditor extends Component {
	render() {
    return (
      <div>
        <div className="menu">
          <h2>
            DartDeck - Review Mode 
          </h2>
          <button className="inline">Home</button>
          <form action="" className="inline">
            <input type="radio" name="mode" value="flashcard" checked="checked" /> Flashcard Mode<br></br>
            <input type="radio" name="mode" value="diagram" /> Diagram Mode<br></br>
          </form>
        </div>
      </div>
    );
  }
}