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
      deckName: "Deck Name",
      cards: [],
      currentCard: {
        front: "Front",
        back: "Back",
      },
    };
  }

  setMessage1(e) {
    this.setState({
      message1: e.target.value,
    });
  }

  setMessage2(e) {
    this.setState({
      message2: e.target.value,
    });
  }

  openCloseAddCard2() {
    s = this.state.cards;
    s.push(
      {front: this.state.message1,
       back: this.state.message2,
       color: "White",
       shape: "Rectangle",
      }
    );
    this.setState({
      cards: s,
    });
    this.setState({
      message2:"",
      message1:"",
    });
    //console.log(this.state);
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

  setCurrentCard(e,data) {
    console.log(data);
    var card = data;
    this.setState({
      currentCard: card,
    });
  }

  renderCards() {
    var cards = this.state.cards;
    return (
      <div className="channelsList">
        {cards.map((card) => {
          return (
            <div>
              <li className="high" onClick={(e) => this.setCurrentCard(e, card)} key={card.back}>{card.front}</li>
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

  go() {
    browserHistory.push('/home')
  }


  render() {
    return (
      <div>
        <h2>
          DartDeck - DeckEditor
        </h2>
        <button onClick={this.go.bind(this)}>Home</button>
        <hr></hr>
        <div className="channel-search">
          <h3>New Card</h3>
          <h4>Front</h4> 
          <input type="text" value={this.state.message1} onChange={this.setMessage1.bind(this)} placeholder="Front of Card" />
          <h4>Back</h4> 
          <input type="text" value={this.state.message2} onChange={this.setMessage2.bind(this)}  placeholder="Back of Card" />
          <button type="button" id="add-card-button" onClick={this.openCloseAddCard2.bind(this)}>Add New Card</button>
        </div>
        <div className="deck">
          <h4>Current Deck</h4>
          <hr></hr>
          {this.renderCards()}
        </div>
        <div id="current-card-front">
          <p className="pad">{this.state.currentCard.front}</p>
        </div>
        <div id="current-card-back">
          <p className="pad">{this.state.currentCard.back}</p>
        </div>
        <div id="toolbar">
          <button type="button" id="add-card-button" onClick={this.openCloseAddCard.bind(this)}>Add New Card</button>
          <button type="button" id="button1" onClick={this.editClick.bind(this)}>Edit Card</button>
          <button type="button" id="button2" onClick={this.deleteClick.bind(this)}>Delete Card</button>
          <button type="button" id="saveAndExit">Save and Exit to Home</button>
          <form action="">
            <input type="radio" name="gender" value="male" /> Public<br></br>
            <input type="radio" name="gender" value="female" /> Private<br></br>
          </form>
        </div>
      </div>
    );
  }
}