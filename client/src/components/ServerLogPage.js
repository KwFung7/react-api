import React, { Component } from 'react';
import AdminLayout from './AdminLayout';
import { Paper } from 'material-ui'

class ServerLogPage extends Component {
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid server-log-page page">
          <div className="server-log-page-title page-title">Server Log page</div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default ServerLogPage;