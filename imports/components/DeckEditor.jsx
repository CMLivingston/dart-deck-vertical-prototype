import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './DeckEditorStyles';

export default class DeckEditor extends Component {
  render() {
    return (
      <div>
        <h2>
          DartDeck - DeckEditor
        </h2>
        <hr></hr>
        <div id="deck-editor-sub-container">
          <div id="deck-view">
            <h3>Current Deck</h3>
            <ul>
              <li>First</li>
              <li>Second</li>
            </ul>
          </div>
          <div id="editor-container">
            <div id="main-editor">
              <h3>Current Card</h3>
            </div>
            <div id="toolbar">
              <p>Tools</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}