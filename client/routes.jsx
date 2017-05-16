import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../imports/App.jsx';
import Splash from '../imports/components/Splash.jsx';
import Home from '../imports/components/Home.jsx';
import UserSignIn from '../imports/components/UserSignIn.jsx';
import DeckEditor from '../imports/components/DeckEditor.jsx';
import FormInput from '../imports/components/FormInput.jsx';
import ReviewMode from '../imports/components/ReviewMode.jsx'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UserSignIn} />
      <Route path="home" component={Home} />
      <Route path="deckeditor" component={DeckEditor} />
      <Route path="forminput" component={FormInput} />
      <Route path="review" component={ReviewMode} />
    </Route>
  </Router>
);