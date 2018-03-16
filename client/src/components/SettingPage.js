import React, { Component } from 'react';
import AdminLayout from './AdminLayout';
import { Paper } from 'material-ui'

class SettingPage extends Component {
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid setting-page page">
          <div className="setting-page-title page-title">System setting page</div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default SettingPage;