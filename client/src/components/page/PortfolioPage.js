import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { Paper } from 'material-ui';
import { t } from '../../modules/I18n';
import { fetchSpecificPortfolio } from '../../actions/portfolioActions';

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const { id, fetchSpecificPortfolio } = nextProps;

    if (id && !this.state.loaded) {
      fetchSpecificPortfolio(id);
    }
    this.setState({ loaded: true });
  }

  componentDidMount() {
    const { id, fetchSpecificPortfolio } = this.props;

    if (id && !this.state.loaded) {
      fetchSpecificPortfolio(id);
    }
  }

  render() {
    return (
      <AdminLayout>
        <Paper className="container-fluid portfolio-page page">
          <div className="portfolio-page-title page-title">{t(`portfolioPage.${this.props.part}.title`)}</div>
        </Paper>
      </AdminLayout>
    );
  }
}

export default connect(
  (state, ownProps) => {
    const { data = {} } = state.setting;
    const { selected_portfolio } = data;
    return {
      part: ownProps.match.params.part,
      id: selected_portfolio
    }
  },
  (dispatch) => {
    return {
      fetchSpecificPortfolio: (id) => { dispatch(fetchSpecificPortfolio(id)) },
    }
  }
)(PortfolioPage);