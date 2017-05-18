import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import './UserSignInStyles.css';  

export default class UserSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
    Meteor.logout();
  }

  goToSignUp() {
    browserHistory.push('/signup');
  }

  handleSubmit(event) {
    event.preventDefault();
    browserHistory.push('home');
  }
    

  render() {
    return (
      <div className="signInWrapper">
        <div id="header">
          <h1>DartDeck</h1>
        </div>
        <div id="sub-header">
          <h3>The Flashcard App</h3>
        </div>
        <div className="signInContainer">
          <div className="signInContent">
            <div className="signInCard cardSignIn">
              <h4 className="pageTitle">Sign In</h4>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                  id="email"
                  key="email"
                  ref="email"
                  className="inputBoxSignIn"
                  type="username"
                  placeholder="Username"
                />
                <input
                  id="password"
                  key="password"
                  ref="password"
                  className="inputBoxSignIn"
                  type="password"
                  placeholder="Password"
                />
                <div className="signInButtonContainer">
                  <input
                    key="signInButton"
                    className="signInButton"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
            </div>
            <div className="bottomButtonBuffer" />
          </div>
        </div>
      </div>
    );
  }
}
