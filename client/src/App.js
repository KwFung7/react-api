import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import * as constants from './constants';
import { setLocale } from './modules/I18n';
import './App.css';

// Import components
import NoMatch from './components/NoMatch';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SettingPage from './components/SettingPage';
import PortfolioPage from './components/PortfolioPage';
import ServerLogPage from './components/ServerLogPage';
import { muiTheme } from './components/MuiTheme';

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
            <Route path={constants.HOME_ROUTE} component={HomePage} />
            <Route path={constants.SETTING_ROUTE} component={SettingPage} />
            <Route path={constants.PORTFOLIO_ROUTE} component={PortfolioPage} />
            <Route path={constants.SERVER_LOG_ROUTE} component={ServerLogPage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
