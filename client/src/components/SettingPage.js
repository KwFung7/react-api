import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from './AdminLayout';
import { Paper, SelectField, MenuItem } from 'material-ui';
import { t } from '../modules/I18n';
import { fetchSpecificPortfolio } from '../actions/portfolioActions';

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
    const { data = {} } = this.props.setting;
    const { selected_portfolio: id } = data;
    id && this.props.fetchSpecificPortfolio(id);
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
      portfolio: state.portfolio
    }
  },
  (dispatch) => {
    return {
      fetchSpecificPortfolio: (id) => { dispatch(fetchSpecificPortfolio(id)) },
    }
  }
)(SettingPage);