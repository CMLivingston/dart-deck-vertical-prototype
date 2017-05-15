import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
<<<<<<< HEAD
import './FormInputStyles.css';  
=======
import { browserHistory } from 'react-router';
import './HomeStyles.css';  
>>>>>>> master

export default class Splash extends Component {

  goToDeckEditor() {
    browserHistory.push('/deckeditor');
  }

  render() {
    return (
      <div>
        <h2>
          DartDeck - Home
        </h2>
        <hr></hr>
<<<<<<< HEAD
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

          </form>

          <button type="button" className="submit" align="center"> Create Deck </button> 

=======
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
        <button type="button" onClick={this.goToDeckEditor.bind(this)}>Add Deck!</button>
>>>>>>> master
      </div>
    );
  }
}


// import React, { Component, PropTypes } from 'react';
// import { Meteor } from 'meteor/meteor';
// import './HomeStyles.css';  

// export default class Splash extends Component {
//   render() {
//     return (
//       <div>
//         <h2>
//           DartDeck - Home
//         </h2>
//         <hr></hr>
//         <table className="homeTableWrapper">
//           <caption> ALL DECKS </caption> 
//           <tr> 
//             <th>My Decks</th> 
//             <th>Public Decks</th> 
//           </tr> 
//           <tr className="tableContent"> 
//             <td>Biol 12</td> 
//             <td>Cosc 31</td> 
//           </tr> 
//           <tr> 
//             <td>Cosc 30</td> 
//             <td>Math 20</td> 
//           </tr> 
//           <tr> 
//             <td>Math 23</td> 
//             <td>Psyc 06</td> 
//           </tr> 
//         </table> 
//         <button type="button">Add Deck!</button>
//       </div>
//     );
//   }
// }
