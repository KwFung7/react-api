import React, { Component } from 'react';
import AdminLayout from './AdminLayout';
import { Paper } from 'material-ui';
import { t } from '../modules/I18n';

class SettingPage extends Component {
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid setting-page page">
          <div className="setting-page-title page-title">{t('settingPage.title')}</div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default SettingPage;