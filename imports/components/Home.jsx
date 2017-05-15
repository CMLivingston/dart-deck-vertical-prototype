import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import './FormInputStyles.css';  

export default class Splash extends Component {
  render() {
    return (
      <div>
        <h2>
          DartDeck - Home
        </h2>
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

          </form>

          <button type="button" className="submit" align="center"> Create Deck </button> 

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
