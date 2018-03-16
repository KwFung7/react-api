import React, { Component } from 'react';
import AdminLayout from './AdminLayout';
import { Paper } from 'material-ui'

class PortfolioPage extends Component {
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid portfolio-page page">
          <div className="portfolio-page-title page-title">Portfolio page</div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default PortfolioPage;