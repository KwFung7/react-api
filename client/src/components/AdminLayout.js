import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, FlatButton, Drawer, MenuItem, Paper, List, ListItem } from 'material-ui';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import { t, setLocale, currentLocale } from '../modules/I18n';
import CopyrightFooter from './CopyrightFooter';
import * as constants from '../constants';

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
        setLocale(constants.TW);
        break;
      case constants.TW:
        setLocale(constants.EN);
        break;
      default:
        setLocale(constants.EN);
    }
    this.forceUpdate();
    return;
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleLocationChange = (location) => {
    this.props.history.push(location);
  }

  render() {
    return (
      <Paper>
        <AppBar
          title={t('navigation.appTitle')}
          style={{ zIndex: 1500 }}
          zDepth={3}
          onLeftIconButtonClick={this.handleDrawer}
          iconElementRight={
            <FlatButton label={t('navigation.localeBtnLabel')} onClick={this.handleLocaleBtnClick} />
          }
          onTitleClick={() => {
            this.handleLocationChange(constants.HOME_ROUTE)
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
              onClick={() => { 
                this.handleLocationChange(constants.SETTING_ROUTE) 
              }}
            />
            <ListItem
              primaryText={t('navigation.drawerMenu.portfolio.label')}
              primaryTogglesNestedList={true}
              leftIcon={<ActionFace />}
              onClick={() => {
                this.handleLocationChange(constants.PORTFOLIO_ROUTE) 
              }}
              nestedItems={t('navigation.drawerMenu.portfolio.subMenu').map((obj, idx) => {
                return (
                  <ListItem 
                    key={idx}
                    primaryText={obj}
                    onClick={() => {
                      this.handleLocationChange(constants.PORTFOLIO_ROUTE) 
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
              onClick={() => {
                this.handleLocationChange(constants.SERVER_LOG_ROUTE) 
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

export default withRouter(AdminLayout);