import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import AdminLayout from './AdminLayout';
import { Paper, SelectField, MenuItem } from 'material-ui';
import { t } from '../modules/I18n';
import { API_HOST_URL, API_ROUTE, PORTFOLIO_ROUTE, SETTING_ROUTE } from '../constants';

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioValue: '',
      systemSetting: {},
      portfolios: []
    };
  }

  handleChange = (e, idx, value) => {
    this.setState({
      portfolioValue: value
    });
  }

  fetchPortfolioList = () => {
    const config = {
      method: 'GET',
      url: `${API_HOST_URL}${API_ROUTE}${PORTFOLIO_ROUTE}`
    }
    axios(config)
    .then((payload) => {
      console.log(payload)
    })
    .catch(() => {
      console.log('Cant fetch portfolio list.')
    })
  }

  fetchSystemSetting = () => {
    const config = {
      method: 'GET',
      url: `${API_HOST_URL}${API_ROUTE}${SETTING_ROUTE}`
    }
    axios(config)
    .then((payload) => {
      const { data = [] } = payload;
      const systemSetting = _.pick(_.head(data), ['selected_portfolio']);
      this.setState({
        systemSetting,
        portfolioValue: systemSetting.selected_portfolio 
      });
    })
    .catch(() => {
      console.log('Cant fetch system setting.')
    })
  }

  componentDidMount() {
    this.fetchSystemSetting();
    this.fetchPortfolioList();
  }

  render() {
    console.log(this.state)
    return (
      <AdminLayout>
        <Paper className="container-fluid setting-page page">
          <div className="setting-page-title page-title">{t('settingPage.title')}</div>
          <div className="setting-page-body page-body">
            <SelectField
              floatingLabelText={t('settingPage.selectedPortfolio')}
              style={{ textAlign: 'left' }}
              value={this.state.portfolioValue}
              onChange={this.handleChange}
              dropDownMenuProps={{
                anchorOrigin: {
                  vertical: 'center',
                  horizontal: 'left',
                }
              }}
            >
              <MenuItem value={this.state.portfolioValue} primaryText="felixkwan" />
            </SelectField>
          </div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default SettingPage;