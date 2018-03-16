import React, { Component} from 'react';
import AdminLayout from './AdminLayout';
import { Paper } from 'material-ui'

class HomePage extends Component {
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid home-page page">
          <div>Home page</div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default HomePage;