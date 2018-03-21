import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from './AdminLayout';
import { Paper, SelectField, MenuItem } from 'material-ui';
import { t } from '../modules/I18n';
import { fetchSpecificPortfolio, fetchPortfolioList } from '../actions/portfolioActions';
import { ADMIN_ROLE } from '../constants';

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioValue: '',
    };
  }

  handleChange = (e, idx, value) => {
    this.setState({
      portfolioValue: value
    });
  }

  componentDidMount() {
    const { user = {}, setting = {}, fetchPortfolioList, fetchSpecificPortfolio } = this.props;
    if (user.role === ADMIN_ROLE) {
      fetchPortfolioList();
    } else {
      const { data = {} } = setting;
      const { selected_portfolio: id } = data;
      id && fetchSpecificPortfolio(id);
    }
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

export default connect(
  (state) => {
    return {
      setting: state.setting,
      user: state.user
    }
  },
  (dispatch) => {
    return {
      fetchPortfolioList: () => { dispatch(fetchPortfolioList()); },
      fetchSpecificPortfolio: (id) => { dispatch(fetchSpecificPortfolio(id)); }
    }
  }
)(SettingPage);