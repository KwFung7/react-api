import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { AppBar, FlatButton, Drawer, Paper, List, ListItem, IconButton, CircularProgress } from 'material-ui';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import { t, setLocale, currentLocale } from '../modules/I18n';
import CopyrightFooter from './CopyrightFooter';
import * as constants from '../constants';
import { startLogoutProcess, setCurrentLocale } from '../actions/userActions';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.getElementsByTagName('body')[0].clientWidth;
    this.isMobile = this.screenWidth < constants.BREAKPOINT_MOBILE;

    this.state = {
      open: !this.isMobile
    }
  }

  handleLocaleBtnClick = () => {
    switch (currentLocale()) {
      case constants.EN:
        this.props.setCurrentLocale(constants.TW);
        setLocale(constants.TW);
        break;
      case constants.TW:
        this.props.setCurrentLocale(constants.EN);
        setLocale(constants.EN);
        break;
      default:
        this.props.setCurrentLocale(constants.EN);
        setLocale(constants.EN);
        break;
    }
    this.props.handleLocationChange(window.location.pathname);
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleLogout = () => {
    const { startLogoutProcess, handleLocationChange } = this.props;
    startLogoutProcess(() => {
      handleLocationChange(constants.LOGIN_ROUTE);
    });
  };

  render() {
    const { user = {} } = this.props;
    return (
      <Paper>
        <AppBar
          title={t('navigation.appTitle')}
          style={{ zIndex: 1500, position: 'fixed', top: 0 }}
          zDepth={3}
          onLeftIconButtonClick={this.handleDrawer}
          iconElementRight={
            <div style={{ display: 'flex' }}>
              <div style={{ alignSelf: 'center', color: 'white' }}>
                {user.userName}
              </div>
              <IconButton
                iconStyle={{ color: 'white' }}
                tooltip={t('iconBtnTooltip.logout')}
                onClick={this.handleLogout}
              >
                {
                  user.loading
                  ? <CircularProgress size={15} thickness={2.5} color='white' />
                  : <ActionExitToApp />
                }
              </IconButton>
              <FlatButton
                label={t('navigation.localeBtnLabel')}
                onClick={this.handleLocaleBtnClick}
                style={{ color: 'white', minWidth: 40 }}
              />
            </div>
          }
          onTitleClick={() => {
            this.props.handleLocationChange(constants.HOME_ROUTE)
          }}
        />
        <Drawer
          open={this.state.open}
          width={220}
          zDepth={3}
          containerStyle={{ height: 'calc(100% - 64px)', top: 64, backgroundColor: 'lightgrey' }}
        >
          <List style={{ padding: 0 }}>
            <ListItem
              primaryText={t('navigation.drawerMenu.setting')}
              leftIcon={<ActionSettings />}
              innerDivStyle={{ color: 'rgba(0, 0, 0, 0.6)' }}
              onClick={() => { 
                this.props.handleLocationChange(constants.SETTING_ROUTE) 
              }}
            />
            <ListItem
              primaryText={t('navigation.drawerMenu.portfolio.label')}
              primaryTogglesNestedList={true}
              leftIcon={<ActionFace />}
              innerDivStyle={{ color: 'rgba(0, 0, 0, 0.6)' }}
              nestedItems={t('navigation.drawerMenu.portfolio.subMenu').map((obj, idx) => {
                return (
                  <ListItem 
                    key={idx}
                    primaryText={obj}
                    innerDivStyle={{ color: 'rgba(0, 0, 0, 0.6)' }}
                    onClick={() => {
                      this.handleDrawer();
                      this.props.handleLocationChange(`${constants.PORTFOLIO_ROUTE}/${constants.PORTFOLIO_SUBROUTE[idx]}`) 
                    }}
                  />
                )
              })}
            />
            <ListItem
              primaryText={t('navigation.drawerMenu.feedback')}
              leftIcon={<ActionFeedback />}
              disabled={true}
              innerDivStyle={{ opacity: 0.5 }}
            />
            <ListItem
              primaryText={t('navigation.drawerMenu.serverLog')}
              leftIcon={<NotificationEventNote />}
              innerDivStyle={{ color: 'rgba(0, 0, 0, 0.6)' }}
              onClick={() => {
                this.props.handleLocationChange(constants.SERVER_LOG_ROUTE) 
              }}
            />
          </List>
        </Drawer>
        {this.props.children}
        <CopyrightFooter />
      </Paper>
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
      handleLocationChange: (location) => { dispatch(push(location)); },
      startLogoutProcess: (callback) => { dispatch(startLogoutProcess(callback)); },
      setCurrentLocale: (locale) => { dispatch(setCurrentLocale(locale)); }
    }
  }
)(AdminLayout);