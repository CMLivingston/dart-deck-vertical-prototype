import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './DeckEditorStyles';
import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';

export default class DeckEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message1: '',
      message2: '',
      deckType: 'Private',
      deckName: "My New Deck",
      cards: [],
      currentCard: {
        front: "Front",
        back: "Back",
      },
    };
  }

  alertNoDiag() {
    window.alert("This would switch to the main window below to the Diagramming Mode View.")
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

  setDeckName(e) {
    this.setState({
      deckName: e.target.value,
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

  openEdit() {
    function slideMenu() {
      var channelSearch = document.querySelector('.edit');
      channelSearch.classList.toggle('open');
      if (channelSearch.classList.contains('transition') > -1){
        channelSearch.classList.add('transition');
      }
    }
    slideMenu();
  }

  openNC1() {
    console.log('hehe');
    function slideMenu() {
      var channelSearch = document.querySelector('.name-change');
      channelSearch.classList.toggle('open');
      if (channelSearch.classList.contains('transition') > -1){
        channelSearch.classList.add('transition');
      }
    }
    slideMenu();
  }

  openNC2() {
    function slideMenu() {
      var channelSearch = document.querySelector('.name-change');
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

    s = this.state.cards;
    console.log(s);
    c = this.state.currentCard.front
    var index = s.findIndex(function(o){
     return o.front == c;
    })
    s.splice(index, 1);
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

  setTypePub() {
    this.setState({
      deckType: 'Public',
    });
  }

  setTypePriv() {
    this.setState({
      deckType: 'Private',
    });
  }

  saveAndExit() {
    if (this.state.deckType == 'Private') {
      Session.set('priv', this.state.deckName);
    } 
    if (this.state.deckType == 'Public') {
      console.log('public');
      Session.set('pub', this.state.deckName);
    } 
    browserHistory.push('/home')
  }

  toRed(){
    ef = this.refs.ccfront;
    eb = this.refs.ccback;
    ef.className = "red";
    eb.className = "red";
  }

  toBlue(){
    ef = this.refs.ccfront;
    eb = this.refs.ccback;
    ef.className = "blue";
    eb.className = "blue";
  }

  toGreen(){
    ef = this.refs.ccfront;
    eb = this.refs.ccback;
    ef.className = "green";
    eb.className = "green";
  }

  toRectangle(){
    ef = this.refs.ccfront;
    eb = this.refs.ccback;
    ef.id = "current-card-front";
    eb.id = "current-card-back";
  }

  toTriangle(){
    ef = this.refs.ccfront;
    eb = this.refs.ccback;
    ef.id = "triangle";
    eb.id = "triangle2";
  }
  toCircle(){
    ef = this.refs.ccfront;
    eb = this.refs.ccback;
    ef.id = "circle";
    eb.id = "circle2";
  }

  render() {
    return (
      <div>
        <div className="menu">
          <h2>
            DartDeck - DeckEditor 
          </h2>
          <button className="inline" onClick={this.go.bind(this)}>Home</button>
          <form action="" className="inline">
            <input type="radio" name="mode" value="flashcard" checked="checked"/> Flashcard Mode<br></br>
            <input onClick={this.alertNoDiag.bind(this)} type="radio" name="mode" value="diagram" /> Diagram Mode<br></br>
          </form>
        </div>
        <hr></hr>
        <div className="channel-search">
          <h3>New Card</h3>
          <h4>Front</h4> 
          <input type="text" value={this.state.message1} onChange={this.setMessage1.bind(this)} placeholder="Front of Card" />
          <h4>Back</h4> 
          <input type="text" value={this.state.message2} onChange={this.setMessage2.bind(this)}  placeholder="Back of Card" />
          <button type="button" id="add-card-button" onClick={this.openCloseAddCard2.bind(this)}>Add New Card</button>
        </div>
        <div className="edit">
          <h3>Edit Tools</h3>
          <div id="color-pal">
            <p>Card Color:</p>
            <div onClick={this.toRed.bind(this)} id="c1"></div>
            <div onClick={this.toBlue.bind(this)} id="c2"></div>
            <div onClick={this.toGreen.bind(this)} id="c3"></div>
          </div>
          <div id="shape-pal">
            <p>Card Shape:</p>
            <div onClick={this.toRectangle.bind(this)} id="s1"></div>
            <div onClick={this.toCircle.bind(this)} id="s3"></div>
            <div onClick={this.toTriangle.bind(this)} id="s2"></div> 
          </div>
          <button type="button" id="add-card-button" onClick={this.openEdit.bind(this)}>Close</button>
        </div>
        <div className="name-change">
          <h3>New Name:</h3>
          <input type="text" onChange={this.setDeckName.bind(this)} placeholder="New Deck Name" />
          <button type="button" id="change-deck" onClick={this.openNC2.bind(this)}>Save Name</button>
        </div>
        <div className="deck">
          <div className="deck_lable">
            <h onClick={this.openNC1.bind(this)}>Current Deck: {this.state.deckName}</h>
            <p onClick={this.openNC1.bind(this)}>(Click to Change)</p>
            <hr></hr>
            {this.renderCards()}
          </div>
        </div>
        <div ref="ccfront" id="current-card-front">
          <p className="pad">{this.state.currentCard.front}</p>
        </div>
        <div ref="ccback" id="current-card-back">
          <p className="pad">{this.state.currentCard.back}</p>
        </div>
        <div id="toolbar">
          <button type="button" className="inner" id="add-card-button2" onClick={this.openCloseAddCard.bind(this)}>Add New Card</button>
          <button type="button" className="inner" id="button1" onClick={this.openEdit.bind(this)}>Edit Card</button>
          <button type="button" className="inner" id="button2" onClick={this.deleteClick.bind(this)}>Delete Card</button>
          <button type="button" className="inner" id="saveAndExit" onClick={this.saveAndExit.bind(this)}>Save and Exit</button>
          <form className="inner" action="">
            <input onClick={this.setTypePub.bind(this)} type="radio" name="gender" value="Public" /> Public<br></br>
            <input onClick={this.setTypePriv.bind(this)} type="radio" name="gender" value="Private" /> Private<br></br>
          </form>
        </div>
      </div>
    );
  }
}