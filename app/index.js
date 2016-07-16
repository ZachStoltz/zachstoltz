import '../dist/site.scss';
import '../dist/normalize.scss';

import App from './components/App.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Lula from './components/routes/Lula.jsx';
import Main from './components/Main.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Route, Router } from 'react-router';

import store, { history } from './store';

const router = (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Main} />
          <Route path="/lula" component={Lula} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

render(router, document.getElementById('root'));
