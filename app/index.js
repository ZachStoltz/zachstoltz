import App from './components/App.jsx';
import BaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './components/Main.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const router = (
  <MuiThemeProvider muiTheme={getMuiTheme(BaseTheme)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  </MuiThemeProvider>
);

render(router, document.getElementById('root'));
