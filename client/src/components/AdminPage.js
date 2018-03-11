import React, { Component} from 'react';
import { AppBar, FlatButton } from 'material-ui';
import { t, setLocale, currentLocale } from '../modules/I18n';
import { EN, TW } from '../constants';

class AdminPage extends Component {
  handleClick = () => {
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
      <AppBar
        title={t('navigation.appTitle')}
        iconElementRight={
          <FlatButton label={t('navigation.localeBtnLabel')} onClick={this.handleClick} />
        }
      />
    );
  }
}

export default AdminPage;