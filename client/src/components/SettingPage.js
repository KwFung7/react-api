import React, { Component } from 'react';
import axios from 'axios';
import AdminLayout from './AdminLayout';
import { Paper, SelectField, MenuItem } from 'material-ui';
import { t } from '../modules/I18n';
import { API_HOST_URL, API_ROUTE, PORTFOLIO_ROUTE } from '../constants';

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      portfolios: []
    };
  }

  handleChange = (e, idx, value) => {
    this.setState({ value });
  }

  // fetchPortfolioList = () => {
  //   const config = {
  //     method: 'GET',
  //     url: `${API_HOST_URL}${API_ROUTE}${PORTFOLIO_ROUTE}`
  //   }
  //   axios(config)
  //   .then(() => {

  //   })
  //   .catch(() => {

  //   })
  // }

  componentDidMount() {

  }
  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid setting-page page">
          <div className="setting-page-title page-title">{t('settingPage.title')}</div>
          <div className="setting-page-body page-body">
            <SelectField
              floatingLabelText={t('settingPage.selectedPortfolio')}
              style={{ textAlign: 'left' }}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
          </div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default SettingPage;