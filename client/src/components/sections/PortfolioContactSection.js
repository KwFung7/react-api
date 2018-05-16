import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Paper, TextField, Chip, Avatar } from 'material-ui';
import FormControlSection from '../FormControlSection';
import { t } from '../../modules/I18n';
import ActionAssignmentInd from 'material-ui/svg-icons/action/assignment-ind';
import { GUEST_ROLE, WORD_LIMIT } from '../../constants';
import { setPortfolioData } from '../../actions/portfolioActions';

class PortfolioContactSection extends Component {
  constructor(props) {
    super(props);

    const formData = _.omit(props.content, ['_id']);
    this.state = {
      editing: false,
      formData
    };
  }

  handleChange = (field) => (e, newValue) => {
    if (newValue.length <= WORD_LIMIT[field]) {
      this.setState({
        formData: {
          ...this.state.formData,
          [field]: newValue
        }
      });
    }
  };

  handleEditBtnClick = () => {
    this.setState({ editing: true });
  };

  handleCompleteBtnClick = () => {
    const { _id, content, setPortfolioData } = this.props;
    const payload = {
      contact: {
        ...content,
        ...this.state.formData
      }
    };

    this.setState({ editing: false }, () => {
      setPortfolioData(_id, payload)
    });
  };

  render() {
    const { formData, editing } = this.state;
    const { name, role } = this.props;
    const isGuest = role === GUEST_ROLE;

    return (
      <Paper className="portfolio-page-body page-body">
        <Chip style={{ marginBottom: '2rem' }} labelColor='grey'>
          <Avatar icon={<ActionAssignmentInd />} />
          {name}
        </Chip>
        <div className="gradient-layer">
          <div className="scroll-view">
            {
              Object.keys(formData).map((obj, key) => {
                return (
                  <TextField
                    key={key}
                    className="custom-width-textfield"
                    floatingLabelFixed={true}
                    floatingLabelText={t(`portfolioPage.contact.${obj}.label`)}
                    hintText={t(`portfolioPage.contact.${obj}.hintText`)}
                    onChange={this.handleChange(obj)}
                    disabled={!editing}
                    value={formData[obj]}
                  />
                )
              })
            }
          </div>
        </div>
        <FormControlSection
          disabledEditBtn={editing || isGuest}
          disabledCompleteBtn={!editing}
          editBtnOnClick={this.handleEditBtnClick}
          completeBtnOnClick={this.handleCompleteBtnClick}
        />
      </Paper>
    )
  }
}

export default connect(
  (state) => {
    const { data = {} } = state.portfolio;
    const { _id, name = '', contact = {} } = data;
    const { currentLang, role } = state.user;
    return {
      _id,
      name,
      role,
      currentLang,
      content: contact
    }
  },
  (dispatch) => {
    return {
      setPortfolioData: (id, data) => { dispatch(setPortfolioData(id, data)); }
    }
  }
)(PortfolioContactSection);