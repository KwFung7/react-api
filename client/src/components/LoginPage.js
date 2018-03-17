import React, { Component } from 'react';
import { Paper, AppBar } from 'material-ui';
import { t } from '../modules/I18n';

const containerStyle = { 
  width: 300,
  height: 400,
  borderRadius: 15,
  backgroundColor: 'whitesmoke',
  margin: 'calc(50vh - 200px) calc(50vw - 150px)'
}
const appbarStyle = {
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15
}
const appbarTitleStyle = {
  color: 'whitesmoke'
}

class LoginPage extends Component {
  render() {
    return (
      <Paper zDepth={4} style={containerStyle}>
        <AppBar
          title={t('loginPage.title')}
          showMenuIconButton={false}
          zDepth={3}
          titleStyle={appbarTitleStyle}
          style={appbarStyle}
        />
      </Paper>
    );
  }
}

export default LoginPage;