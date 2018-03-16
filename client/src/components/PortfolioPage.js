import React, { Component } from 'react';
import AdminLayout from './AdminLayout';
import { Paper } from 'material-ui'
import { t } from '../modules/I18n'

class PortfolioPage extends Component {
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid portfolio-page page">
          <div className="portfolio-page-title page-title">{t('portfolioPage.title')}</div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default PortfolioPage;