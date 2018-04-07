import React, { Component } from 'react';
import AdminLayout from '../AdminLayout';
import { Paper } from 'material-ui';
import { t } from '../../modules/I18n';
// import logData from '../../../../server/server.log';

class ServerLogPage extends Component {
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid server-log-page page">
          <div className="server-log-page-title page-title">{t('serverLogPage.title')}</div>
          <Paper className="setting-page-body page-body">
            {__dirname}
          </Paper>
        </Paper>
      </AdminLayout>
    );
  }
}

export default ServerLogPage;