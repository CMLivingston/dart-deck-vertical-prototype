import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './FormInputStyles.css';  
import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';


export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckType: 'Private',
      deckName: "My New Deck",
    }
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

  setDeckName(e) {
    this.setState({
      deckName: e.target.value,
    });
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

  goToDeckEditor() {
    browserHistory.push('/deckeditor')
  }

  goHome() {
    browserHistory.push('/home')
  }

  alertSomething() {
    window.alert('A new input row has been added.');
  }

  render() {
    return (
      <div>
        <div className="menu">
          <h2>
            DartDeck - Form Input 
          </h2>
          <button onClick={this.goHome.bind(this)} className="inline">Home</button>
        </div>
        <hr></hr>
          <form className = "formPanel">
            <label> Form Input for: {this.state.deckName} </label>
            <br></br>
            <br></br>
            <div className="name-change">
              <h3>New Deck Name:</h3>
              <input type="text" onChange={this.setDeckName.bind(this)} placeholder="New Deck Name" />
              <button type="button" id="change-deck" onClick={this.openNC2.bind(this)}>Save Name</button>
            </div>
            <button type="button" onClick={this.openNC1.bind(this)} className="newCard"> Name Deck </button> 
            <button type="button" onClick={this.alertSomething.bind(this)} className="newCard"> Add Card </button> 
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>          
          </form>

          <button onClick={this.saveAndExit.bind(this)} type="button" className="submit" align="center">Create Deck</button> 
          <form action="" className="pubpriv">
            <input onClick={this.setTypePub.bind(this)} type="radio" name="gender" value="male" /> Public<br></br>
            <input onClick={this.setTypePriv.bind(this)} type="radio" name="gender" value="female" /> Private<br></br>
          </form>
      </div>
    );
  }
}
