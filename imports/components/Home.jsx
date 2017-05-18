import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './HomeStyles.css';  
import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';

export default class Home extends Component {
  constructor(props) {
    super(props);
    pubDeck = null;
    privDeck = null;
    pu = Session.get('pub');
    pr = Session.get('priv');
    console.log(pu);
    console.log(pr);

    if (pu) {
      pubDeck = pu;
    }
    if (pr) {
      privDeck = pr;
    }
    this.state = {
      pubDeckName: pubDeck,
      privDeckName: privDeck,
    }
  }

  so(){
    browserHistory.push('/');
  }

  alertSomething() {
    window.alert('The transition to edit or review mode would occur now.');
  }

  goToDeckEditor() {
    browserHistory.push('/deckeditor')
  }

  goToFormEditor() {
    browserHistory.push('/forminput')
  }

  openCloseAddDeck() {
    function slideMenu() {
      var channelSearch = document.querySelector('.add-deck');
      channelSearch.classList.toggle('open');
      if (channelSearch.classList.contains('transition') > -1){
        channelSearch.classList.add('transition');
      }
    }
    slideMenu();
  }

  render() {
    return (
      <div>
        <h2>
          DartDeck - Home
        </h2>
        <hr></hr>
        <div className="add-deck">
          <h3>Deck Creation</h3>
          <button type="button" id="add-deck-button-1" onClick={this.goToFormEditor.bind(this)}>Create With Form</button>
          <button type="button" id="add-deck-button-2" onClick={this.goToDeckEditor.bind(this)}>Create With Deck Editor</button>
          <button type="button" id="add-deck-button-3" onClick={this.openCloseAddDeck.bind(this)}>Cancel</button>
        </div>
        <table onClick={this.alertSomething.bind(this)} className="homeTableWrapper">
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
          <tr> 
            <td>{this.state.privDeckName}</td>
            <td>{this.state.pubDeckName}</td> 
          </tr> 
        </table> 
        <button onClick={this.openCloseAddDeck.bind(this)} type="button">Add Deck!</button>
        <button onClick={this.so.bind(this)} id="red-button" type="button">Sign Out</button>
      </div>
    );
  }
}
