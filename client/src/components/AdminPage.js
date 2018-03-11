import React, { Component} from 'react';
import { AppBar, FlatButton, Drawer, MenuItem, Paper } from 'material-ui';
import { t, setLocale, currentLocale } from '../modules/I18n';
import { EN, TW } from '../constants';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      open: true
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
  }

  render() {
    return (
      <Paper>
        <AppBar
          title={t('navigation.appTitle')}
          style={{ zIndex: 1500 }}
          iconElementRight={
            <FlatButton label={t('navigation.localeBtnLabel')} onClick={this.handleLocaleBtnClick} />
          }
        />
        <Drawer
          open={this.state.open}
          width={200}
          containerStyle={{ height: 'calc(100% - 64px)', top: 64 }}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </Paper>
    );
  }
}

export default AdminPage;