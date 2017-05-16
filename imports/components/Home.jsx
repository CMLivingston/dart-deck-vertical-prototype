import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './HomeStyles.css';  
import { browserHistory } from 'react-router';

export default class Splash extends Component {

  goToDeckEditor() {
    browserHistory.push('/deckeditor')
  }

  render() {
    return (
      <div>
        <h2>
          DartDeck - Home
        </h2>
        <hr></hr>
        <table className="homeTableWrapper">
          <caption> ALL DECKS </caption> 
          <tr> 
            <th>My Decks</th> 
            <th>Public Decks</th> 
          </tr> 
          <tr className="tableContent"> 
            <td>Biol 12</td> 
            <td>Cosc 31</td> 
          </tr> 
          <tr> 
            <td>Cosc 30</td> 
            <td>Math 20</td> 
          </tr> 
          <tr> 
            <td>Math 23</td> 
            <td>Psyc 06</td> 
          </tr> 
        </table> 
        <button onClick={this.goToDeckEditor.bind(this)} type="button">Add Deck!</button>
      </div>
    );
  }
}
