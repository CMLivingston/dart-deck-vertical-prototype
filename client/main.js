import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating'
import { renderRoutes } from './routes.jsx';

import App from '../imports/App.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
