import React, { Component} from 'react';
import { AppBar, FlatButton, Drawer, MenuItem, Paper, List, ListItem } from 'material-ui';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import { t, setLocale, currentLocale } from '../modules/I18n';
import { EN, TW, BREAKPOINT_MOBILE } from '../constants';

class AdminLayout extends Component {
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
          zDepth={3}
          titleStyle={{ fontFamily: 'harabara', letterSpacing: '5px' }}
          onLeftIconButtonClick={this.handleDrawer}
          iconElementRight={
            <FlatButton label={t('navigation.localeBtnLabel')} onClick={this.handleLocaleBtnClick} />
          }
        />
        <Drawer
          open={this.state.open}
          width={220}
          zDepth={3}
          containerStyle={{ height: 'calc(100% - 64px)', top: 64, backgroundColor: 'whitesmoke' }}
        >
          <List style={{ padding: 0 }}>
            <ListItem
              primaryText={t('navigation.drawerMenu.setting')}
              leftIcon={<ActionSettings />}
            />
            <ListItem
              primaryText={t('navigation.drawerMenu.portfolio.label')}
              primaryTogglesNestedList={true}
              leftIcon={<ActionFace />}
              nestedItems={t('navigation.drawerMenu.portfolio.subMenu').map((obj, idx) => {
                return <ListItem key={idx} primaryText={obj} />;
              })}
            />
            <ListItem
              primaryText={t('navigation.drawerMenu.feedback')}
              leftIcon={<ActionFeedback />}
              disabled={true}
            />
            <ListItem
              primaryText={t('navigation.drawerMenu.serverLog')}
              leftIcon={<NotificationEventNote />}
              disabled={true}
            />
          </List>
        </Drawer>
        {this.props.children}
      </Paper>
    );
  }
}

export default AdminLayout;