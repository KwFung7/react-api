import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from './AdminLayout';
import { Paper } from 'material-ui';
import { t } from '../modules/I18n';
import { fetchSpecificPortfolio } from '../actions/portfolioActions';


class PortfolioPage extends Component {

  componentDidMount() {
    const { data = {} } = this.props.setting;
    const { selected_portfolio: id } = data;
    id && this.props.fetchSpecificPortfolio(id);
  }

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

export default connect(
  (state) => {
    return {
      setting: state.setting,
      portfolio: state.portfolio
    }
  },
  (dispatch) => {
    return {
      fetchSpecificPortfolio: (id) => { dispatch(fetchSpecificPortfolio(id)) },
    }
  }
)(PortfolioPage);