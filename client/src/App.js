import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import * as constants from './constants';
import { setLocale } from './modules/I18n';
import { connect } from 'react-redux';
import _ from 'lodash';
import './App.css';

// Import components
import NoMatch from './components/NoMatch';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SettingPage from './components/SettingPage';
import PortfolioPage from './components/PortfolioPage';
import ServerLogPage from './components/ServerLogPage';
import PrivateRoute from './components/PrivateRoute';
import { muiTheme } from './components/MuiTheme';

// Actions
import { fetchSystemSetting } from './actions/settingActions';
import { checkToken } from './actions/userActions';

class App extends Component {
  constructor(props) {
    super(props);
    setLocale();
  }

  componentDidMount() {
    const token = window.localStorage.getItem(constants.TOKEN);
    !_.isEmpty(token) && this.props.checkToken(token);
    this.props.fetchSystemSetting();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={this.props.history}>
          <Switch>
            <Route exact path={constants.ROOT} render={(props) => {
              return <Redirect to={{
                pathname: constants.HOME_ROUTE,
                state: { from: props.location }
              }} />;
            }} />
            <Route path={constants.LOGIN_ROUTE} component={LoginPage} />
            <PrivateRoute path={constants.HOME_ROUTE} component={HomePage} />
            <PrivateRoute path={constants.SETTING_ROUTE} component={SettingPage} />
            <PrivateRoute path={`${constants.PORTFOLIO_ROUTE}/:part`} component={PortfolioPage} />
            <PrivateRoute path={constants.SERVER_LOG_ROUTE} component={ServerLogPage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  (state) => {
    return {}
  },
  (dispatch) => {
    return {
      fetchSystemSetting: () => { dispatch(fetchSystemSetting()); },
      checkToken: (token) => { dispatch(checkToken(token)); }
    }
  }
)(App);
