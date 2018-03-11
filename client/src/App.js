import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import AdminPage from './components/AdminPage';
import LoginPage from './components/LoginPage';
import { muiTheme } from './components/MuiTheme';
import * as constants from './constants';
import { setLocale } from './modules/I18n';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    setLocale();
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Switch>
            <Route exact path={constants.ROOT} render={() => {
              return <Redirect to={constants.HOME_ROUTE} />;
            }} />
            <Route path={constants.LOGIN_ROUTE} component={LoginPage} />
            <Route path={constants.HOME_ROUTE} component={AdminPage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
