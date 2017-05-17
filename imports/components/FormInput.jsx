import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './FormInputStyles.css';  
import { browserHistory } from 'react-router';



export default class FormInput extends Component {
  
  goToDeckEditor() {
    browserHistory.push('/deckeditor')
  }

  goHome() {
    browserHistory.push('/home')
  }

  render() {
    return (
      <div>
        <div className="menu">
          <h2>
            DartDeck - Form Input 
          </h2>
          <button className="inline">Home</button>
          <form action="" className="inline">
            <input type="radio" name="mode" value="flashcard" checked="checked"/> Flashcard Mode<br></br>
            <input type="radio" name="mode" value="diagram" /> Diagram Mode<br></br>
          </form>
        </div>
        <hr></hr>
          <form className = "formPanel">
            <label> Form Input </label>
            <br></br>
            <br></br>
            <button type="button" className="newCard"> Add Card </button> 
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

          <button onClick={this.goHome.bind(this)} type="button" className="submit" align="center"> Create Deck </button> 
          <form action="" className="pubpriv">
            <input type="radio" name="gender" value="male" /> Public<br></br>
            <input type="radio" name="gender" value="female" /> Private<br></br>
          </form>
      </div>
    );
  }
}
