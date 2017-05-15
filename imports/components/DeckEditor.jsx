import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './DeckEditorStyles';
import { browserHistory } from 'react-router';

export default class DeckEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message1: '',
      message2: '',
      cards: [
        {front:"Photosynthesis",
         back: "plants!",
         color: "White",
         shape: "Rectangle",
        },
        {front:"Krebs Cycle",
         back: "a cycle that is cool",
         color: "White",
         shape: "Rectangle",
        }
      ],
    };
  }

  setMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  openCloseAddCard2() {
    s = this.state.cards;
    s.push(
      {front:"Oxidation",
       back: "a cycle that is cool",
       color: "White",
       shape: "Rectangle",
      }
    );
    this.setState({
      cards: s,
    });
    console.log(this.state);
    function slideMenu() {
      var channelSearch = document.querySelector('.channel-search');
      channelSearch.classList.toggle('open');
      if (channelSearch.classList.contains('transition') > -1){
        channelSearch.classList.add('transition');
      }
    }
    slideMenu();
  }

  openCloseAddCard() {
    function slideMenu() {
      var channelSearch = document.querySelector('.channel-search');
      channelSearch.classList.toggle('open');
      if (channelSearch.classList.contains('transition') > -1){
        channelSearch.classList.add('transition');
      }
    }
    slideMenu();
  }

  renderCards() {
    var cards = this.state.cards;
    return (
      <div className="channelsList">
        {cards.map((card) => {
          return (
            <div>
              <li>{card.front}</li>
            </div>
          )
        })}
      </div>
    );
  }

  editClick() {
    console.log('Edit Clicked');
  }

  deleteClick() {
    console.log('Delete Clicked');
    s = [
        {front:"Photosynthesis",
         back: "plants!",
         color: "White",
         shape: "Rectangle",
        },
        {front:"Krebs Cycle",
         back: "a cycle that is cool",
         color: "White",
         shape: "Rectangle",
        }
      ];
    this.setState({
      cards: s,
    });
  }

  /**
  <div className="channel-search">
            <h3>New Card</h3>
            <h4>Front</h4> 
            <input type="text" placeholder="Front of Card" value="" />
            <h4>Back</h4> 
            <input type="text" placeholder="Back of Card" value="" />
          </div>
  */


  render() {
    return (
      <div>
        <h2>
          DartDeck - DeckEditor
        </h2>
        <button type="button" id="go-home">Home</button>
        <hr></hr>
        <div className="channel-search">
          <h3>New Card</h3>
          <h4>Front</h4> 
          <input type="text" value={this.state.message1} onChange={this.setMessage.bind(this)} placeholder="Front of Card" value="" />
          <h4>Back</h4> 
          <input type="text" value={this.state.message2} placeholder="Back of Card" />
          <button type="button" id="add-card-button" onClick={this.openCloseAddCard2.bind(this)}>Add New Card</button>
        </div>
        <div className="deck">
          <h4>Current Deck</h4>
          <hr></hr>
          {this.renderCards()}
        </div>
        <div id="toolbar">
          <button type="button" id="add-card-button" onClick={this.openCloseAddCard.bind(this)}>Add New Card</button>
          <button type="button" id="button1" onClick={this.editClick.bind(this)}>Edit Card</button>
          <button type="button" id="button2" onClick={this.deleteClick.bind(this)}>Delete Card</button>
        </div>
      </div>
    );
  }
}