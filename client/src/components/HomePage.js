import React, { Component } from 'react';
import AdminLayout from './AdminLayout';
import { Paper } from 'material-ui'
import { t } from '../modules/I18n';

class HomePage extends Component {
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid home-page page">
          <div className="home-page-title page-title">
            <div>{t('homePage.title')}</div>
            <div>{t('homePage.author')}</div>
          </div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default HomePage;