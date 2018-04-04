import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from '../AdminLayout';
import FormControlSection from '../FormControlSection';
import { Paper, SelectField, MenuItem, CircularProgress } from 'material-ui';
import { t } from '../../modules/I18n';
import _ from 'lodash';
import { setSystemSetting } from '../../actions/settingActions';
import { fetchSpecificPortfolio, fetchPortfolioList } from '../../actions/portfolioActions';
import { ADMIN_ROLE } from '../../constants';

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPortfolio: '',
      loaded: false,
      editing: false
    };
  }

  handleChange = (e, idx, value) => {
    this.setState({
      selectedPortfolio: value
    });
  };

  handleEditBtnClick = () => {
    this.setState({ editing: true });
  };

  handleCompleteBtnClick = () => {
    const { setting = {} } = this.props;
    const { data = {} } = setting;
    const payload = {
      selected_portfolio: this.state.selectedPortfolio
    };

    this.setState({ editing: false }, () => {
      this.props.setSystemSetting(data._id, payload);
    });
  };

  fetchPortfolio = (role, setting) => {
    const { fetchPortfolioList, fetchSpecificPortfolio } = this.props;
    this.setState({ loaded: true });

    if (role === ADMIN_ROLE) {
      fetchPortfolioList();
    } else {
      const { data = {} } = setting;
      const { selected_portfolio: id } = data;
      id && fetchSpecificPortfolio(id);
    }
  };

  componentWillReceiveProps(nextProps) {
    const { user = {}, setting = {} } = nextProps;
    const { data = {} } = setting;
    if (_.isEmpty(this.state.selectedPortfolio)) {
      this.setState({
        selectedPortfolio: data.selected_portfolio,
      });
    }

    if (!_.isEmpty(user.role) && !_.isEmpty(setting.data) && !this.state.loaded) {
      this.fetchPortfolio(user.role, setting);
    }
  }

  componentDidMount() {
    const { user = {}, setting = {} } = this.props;
    const { data = {} } = setting;
    this.setState({
      selectedPortfolio: data.selected_portfolio,
    });

    if (!_.isEmpty(user.role) && !_.isEmpty(data) && !this.state.loaded) {
      this.fetchPortfolio(user.role, setting);
    }
  }

  render() {
    const { portfolio = {}, user = {} } = this.props;
    const { list = [], data = {}, loading } = portfolio;
    const specificPortfolio = _.find(list, ['_id', this.state.selectedPortfolio]) || data;
    const isAdmin = user.role === ADMIN_ROLE;

    return (
      <AdminLayout>
        <Paper className="container-fluid setting-page page">
          <div className="setting-page-title page-title">{t('settingPage.title')}</div>
          {
            loading
            ? <div className="setting-page-body page-body"><CircularProgress color='grey' style={{ marginTop: '3rem' }}/></div>
            : <Paper className="setting-page-body page-body">
              {
                !_.isEmpty(specificPortfolio) &&
                <SelectField
                  className="custom-width-textfield"
                  floatingLabelText={t('settingPage.selectedPortfolio')}
                  style={{ textAlign: 'left' }}
                  value={specificPortfolio._id}
                  onChange={this.handleChange}
                  disabled={!this.state.editing}
                  dropDownMenuProps={{
                    anchorOrigin: {
                      vertical: 'center',
                      horizontal: 'left',
                    }
                  }}
                >
                  {
                    _.isEmpty(list)
                    ? <MenuItem value={specificPortfolio._id} primaryText={specificPortfolio.name} />
                    : list.map((obj, idx) => <MenuItem key={idx} value={obj._id} primaryText={obj.name} />)
                  }
                </SelectField>
              }
              <FormControlSection
                disabledEditBtn={this.state.editing || !isAdmin}
                disabledCompleteBtn={!this.state.editing}
                editBtnOnClick={this.handleEditBtnClick}
                completeBtnOnClick={this.handleCompleteBtnClick}
              />
            </Paper>
          }
        </Paper>
      </AdminLayout>
    );
  }
}

export default connect(
  (state) => {
    return {
      setting: state.setting,
      user: state.user,
      portfolio: state.portfolio
    }
  },
  (dispatch) => {
    return {
      fetchPortfolioList: () => { dispatch(fetchPortfolioList()); },
      fetchSpecificPortfolio: (id) => { dispatch(fetchSpecificPortfolio(id)); },
      setSystemSetting: (id, data) => { dispatch(setSystemSetting(id, data)); }
    }
  }
)(SettingPage);