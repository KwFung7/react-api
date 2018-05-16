import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { Paper, Snackbar } from 'material-ui'
import { t } from '../../modules/I18n';
import { GUEST_ROLE } from '../../constants';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { user = {} } = this.props;
    return (
      <AdminLayout>
        <Paper className="container-fluid home-page page">
          <div>
            <div className="home-page-title page-title">{t('homePage.title')}</div>
            <div className="page-subtitle">{t('homePage.author')}</div>
            {
              user.role === GUEST_ROLE &&
              <Snackbar
                open={this.state.open}
                message={t('homePage.notice')}
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
              />
            }
          </div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default connect(
  (state) => {
    return {
      user: state.user
    }
  }
)(HomePage);