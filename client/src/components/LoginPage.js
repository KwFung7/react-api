import React, { Component } from 'react';
import { Paper, AppBar, TextField, RaisedButton, Divider } from 'material-ui';
import CopyrightFooter from './CopyrightFooter';
import { t } from '../modules/I18n';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

const containerStyle = { 
  width: 300,
  height: 380,
  borderRadius: 15,
  backgroundColor: 'whitesmoke',
  margin: 'calc(50vh - 190px) calc(50vw - 150px)'
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
          />
          <TextField
            fullWidth={true}
            type='password'
            floatingLabelFixed={true}
            floatingLabelText={t('loginPage.password')}
            hintText={t('loginPage.enterPassword')} 
          />
          <RaisedButton
            label={t('loginPage.btnLabel')}
            labelPosition='after'
            secondary={true}
            fullWidth={true}
            labelStyle={{ textTransform: 'normal' }}
            style={{ margin: '1rem 0' }}
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
    );
  }
}

export default LoginPage;