import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { Paper, CircularProgress } from 'material-ui';
import { t } from '../../modules/I18n';
import { PORTFOLIO_SUBROUTE } from '../../constants';
import { fetchSpecificPortfolio } from '../../actions/portfolioActions';

// Import all portfolio section
import PortfolioHeaderSection from '../sections/PortfolioHeaderSection';
import PortfolioIntroSection from '../sections/PortfolioIntroSection';
import PortfolioProjectsSection from '../sections/PortfolioProjectsSection';
import PortfolioContactSection from '../sections/PortfolioContactSection';

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  renderSection = () => {
    // assign specific component according to route
    let PortfolioSection;
    switch(this.props.part) {
      case PORTFOLIO_SUBROUTE[0]:
        PortfolioSection = <PortfolioHeaderSection />;
        break;
      case PORTFOLIO_SUBROUTE[1]:
        PortfolioSection = <PortfolioIntroSection />;
        break;
      case PORTFOLIO_SUBROUTE[2]:
        PortfolioSection = <PortfolioProjectsSection />;
        break;
      case PORTFOLIO_SUBROUTE[3]:
        PortfolioSection = <PortfolioContactSection />;
        break;
      default:
        console.log('No specific component for this route.');
        break;
    }
    return PortfolioSection;
  };

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
    const { portfolio = {}, part } = this.props;
    const { loading } = portfolio;
  
    return (
      <AdminLayout>
        <Paper className="container-fluid portfolio-page page">
          <div className="portfolio-page-title page-title">{t(`portfolioPage.${part}.title`)}</div>
          {
            loading
            ? <div className="portfolio-page-body page-body"><CircularProgress color='grey' style={{ marginTop: '3rem' }}/></div>
            : this.renderSection()
          }
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
      id: selected_portfolio,
      portfolio: state.portfolio
    }
  },
  (dispatch) => {
    return {
      fetchSpecificPortfolio: (id) => { dispatch(fetchSpecificPortfolio(id)) },
    }
  }
)(PortfolioPage);