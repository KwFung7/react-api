import React, { Component} from 'react';
import { AppBar, FlatButton, Drawer, MenuItem, Paper, List, ListItem } from 'material-ui';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import { t, setLocale, currentLocale } from '../modules/I18n';
import { EN, TW, BREAKPOINT_MOBILE } from '../constants';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.getElementsByTagName('body')[0].clientWidth;
    this.isMobile = this.screenWidth < BREAKPOINT_MOBILE;

    this.state = {
      open: !this.isMobile
    }
  }

  handleLocaleBtnClick = () => {
    switch (currentLocale()) {
      case EN:
        setLocale(TW);
        break;
      case TW:
        setLocale(EN);
        break;
      default:
        setLocale(EN);
    }
    this.forceUpdate();
    return;
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Paper>
        <AppBar
          title={t('navigation.appTitle')}
          style={{ zIndex: 1500 }}
          onLeftIconButtonClick={this.handleDrawer}
          iconElementRight={
            <FlatButton label={t('navigation.localeBtnLabel')} onClick={this.handleLocaleBtnClick} />
          }
        />
        <Drawer
          open={this.state.open}
          width={220}
          containerStyle={{ height: 'calc(100% - 64px)', top: 64 }}
        >
          <List>
            <ListItem leftIcon={<ActionSettings />}>{t('navigation.drawerMenu.setting')}</ListItem>
            <ListItem leftIcon={<ActionFace />}>{t('navigation.drawerMenu.portfolio.label')}</ListItem>
            <ListItem leftIcon={<ActionFeedback />}>{t('navigation.drawerMenu.feedback')}</ListItem>
            <ListItem leftIcon={<NotificationEventNote />}>{t('navigation.drawerMenu.serverLog')}</ListItem>
          </List>
        </Drawer>
      </Paper>
    );
  }
}

export default AdminPage;