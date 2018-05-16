import React, { Component } from 'react';
import { Paper, AppBar, TextField, RaisedButton, Divider, CircularProgress } from 'material-ui';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import CopyrightFooter from '../CopyrightFooter';
import { t } from '../../modules/I18n';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import { HOME_ROUTE } from '../../constants';
import { startLoginProcess, clearError } from '../../actions/userActions';

const containerStyle = { 
  width: 300,
  height: 400,
  borderRadius: 15,
  backgroundColor: 'whitesmoke',
  margin: '0 calc(50% - 150px)'
};
const appbarStyle = {
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15
};
const appbarTitleStyle = {
  color: 'whitesmoke'
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      userErrorText: '',
      passwordErrorText: ''
    };
  }

  handleLoginBtnClick = () => {
    const { userName, password } = this.state;
    const user = {
      userName,
      password
    };
    this.props.startLoginProcess(user, this.props.toHomePage);
  };

  handleChange = field => (e, newValue) => {
    this.setState({
      [field]: newValue,
      userErrorText: '',
      passwordErrorText: ''
    });
    !_.isEmpty(this.props.user.error) && this.props.clearError();
  };

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props, nextProps)) {
      const { error } = nextProps.user; 
      const { response = {} } = error;
      if (_.includes(response.data, 'password')) {
        this.setState({
          passwordErrorText: response.data
        });
      } else {
        this.setState({
          userErrorText: response.data
        })
      }
    }
  }
  render() {
    const { userName, password, userErrorText, passwordErrorText } = this.state;
    const loading = this.props.user.loading;
    return (
      <div className="container-fluid login-page">
        <Paper zDepth={4} style={containerStyle}>
          <AppBar
            title={t('loginPage.title')}
            iconElementRight={<ActionAccountCircle />}
            showMenuIconButton={false}
            zDepth={3}
            titleStyle={appbarTitleStyle}
            style={appbarStyle}
          />
          <div style={{ padding: '0 1.5rem' }}>
            <TextField
              fullWidth={true}
              floatingLabelFixed={true}
              floatingLabelText={t('loginPage.userName')}
              hintText={t('loginPage.enterUserName')}
              onChange={this.handleChange('userName')}
              errorText={userErrorText}
              value={userName}
            />
            <TextField
              fullWidth={true}
              type='password'
              floatingLabelFixed={true}
              floatingLabelText={t('loginPage.password')}
              hintText={t('loginPage.enterPassword')}
              onChange={this.handleChange('password')}
              errorText={passwordErrorText}
              value={password}
            />
            <RaisedButton
              label={loading ? '' : t('loginPage.btnLabel')}
              icon={loading ? <CircularProgress size={30} thickness={2}/> : ''}
              labelPosition='after'
              secondary={true}
              fullWidth={true}
              labelStyle={{ textTransform: 'normal' }}
              style={{ margin: '1rem 0' }}
              onClick={this.handleLoginBtnClick}
              disabled={loading || _.isEmpty(userName) || _.isEmpty(password)}
            />
            <Divider />
            <div style={{ marginTop: '1rem', color: 'lightgrey' }} >
              <div>{t('loginPage.guestLogin')}</div>
              <div>{t('loginPage.guestUserName')}</div>
              <div>{t('loginPage.guestPassword')}</div>
            </div>
          </div>
          <CopyrightFooter />
        </Paper>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      user: state.user
    }
  },
  (dispatch) => {
    return {
      startLoginProcess: (user, callback) => { dispatch(startLoginProcess(user, callback)) },
      clearError: () => { dispatch(clearError()) },
      toHomePage: () => { dispatch(push(HOME_ROUTE))}
    }
  }
)(LoginPage);