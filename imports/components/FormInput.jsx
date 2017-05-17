import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './FormInputStyles.css';  
import { browserHistory } from 'react-router';
import { Session } from 'meteor/session';



export default class FormInput extends Component {
  
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
            <label> Form Input </label>
            <br></br>
            <br></br>
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
            <div className="newCardInput">
              <input type="text" name="ffront" placeholder="(front of card)"/> 
              :
              <input type="text" name="fback" placeholder="(back of card)"/> 
            </div>
            
          </form>

          <button onClick={this.goHome.bind(this)} type="button" className="submit" align="center">Create Deck</button> 
          <form action="" className="pubpriv">
            <input type="radio" name="gender" value="male" /> Public<br></br>
            <input type="radio" name="gender" value="female" /> Private<br></br>
          </form>
      </div>
    );
  }
}
