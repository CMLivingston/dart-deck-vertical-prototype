import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../imports/App.jsx';
import Splash from '../imports/components/Splash.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
    </Route>
  </Router>
);