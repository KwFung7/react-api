import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { Paper } from 'material-ui';
import { t } from '../../modules/I18n';
import { fetchServerLog } from '../../actions/logActions';
import { ADMIN_ROLE } from '../../constants';

class ServerLogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: '',
      loaded: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { user = {}, serverLog = {}, fetchServerLog } = nextProps;
    const { data } = serverLog;
    this.setState({ log: data });

    if (user.role === ADMIN_ROLE && !this.state.loaded) {
      this.setState({ loaded: true });
      fetchServerLog();
    }
  }

  componentDidMount() {
    const { user = {}, fetchServerLog } = this.props;

    if (user.role === ADMIN_ROLE && !this.state.loaded) {
      this.setState({ loaded: true });
      fetchServerLog();
    }
  }

  render() {
    const logData = this.state.log.toString().split('\n');
    return (
      <AdminLayout>
        <Paper className="container-fluid server-log-page page">
          <div className="server-log-page-title page-title">{t('serverLogPage.title')}</div>
          <Paper className="setting-page-body page-body">
            <div className="server-log-section" style={{ textAlign: 'left', padding: '1rem' }}>
              {
                logData.map((line, idx) => {
                  return <div key={idx}><div>{line}</div>{(idx + 1) % 4 === 0 ? <br/> : ''}</div>
                })
              }
            </div>
          </Paper>
        </Paper>
      </AdminLayout>
    );
  }
}

export default connect(
  (state) => {
    return {
      user: state.user,
      serverLog: state.serverLog
    }
  },
  (dispatch) => {
    return {
      fetchServerLog: () => { dispatch(fetchServerLog()); }
    }
  }
)(ServerLogPage);