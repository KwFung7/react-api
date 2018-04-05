import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Paper, TextField, Chip, Avatar } from 'material-ui';
import FormControlSection from '../FormControlSection';
import { t } from '../../modules/I18n';
import { GUEST_ROLE, WORD_LIMIT } from '../../constants';
import { setPortfolioData } from '../../actions/portfolioActions';
import ActionAssignmentInd from 'material-ui/svg-icons/action/assignment-ind';
import TextFieldList from '../TextFieldList';

class PortfolioIntroSection extends Component {
  constructor(props) {
    super(props);

    const formData = _.omit(props.content, ['_id']);
    this.state = {
      editing: false,
      formData
    };
  }

  handleEditBtnClick = () => {
    this.setState({ editing: true });
  };

  handleCompleteBtnClick = () => {
    this.setState({ editing: false });
  };

  handleMessageChange = () => (e, newValue) => {
    this.setState({
      formData: {
        ...this.state.formData,
        message: [newValue]
      }
    });
  };

  handleGeneralChange = (field) => (e, newValue) => {
    const { formData } = this.state;
    if (newValue.length <= WORD_LIMIT[field]) {
      this.setState({
        formData: {
          ...formData,
          general: {
            ...formData.general,
            [field]: newValue
          }
        }
      });
    }
  };

  render() {
    const { formData, editing } = this.state;
    const { name, role } = this.props;
    const isGuest = role === GUEST_ROLE;
    const { message = [], general = {}, experience = {}, skill = {}, education = {}, language = {}} = formData;

    return (
      <Paper className="portfolio-page-body page-body">
        <Chip style={{ marginBottom: '2rem' }} labelColor='grey'>
          <Avatar icon={<ActionAssignmentInd />} />
          {name}
        </Chip>
        <div className="gradient-layer">
          <div className="scroll-view">
            <div className="message-part section-part">
              {
                message.map((item, idx) => 
                  <TextField
                    id={idx.toString()}
                    key={idx}
                    className="custom-width-textfield"
                    floatingLabelFixed={true}
                    floatingLabelText={t('portfolioPage.intro.message.label')}
                    hintText={t('portfolioPage.intro.message.hintText')}
                    onChange={this.handleMessageChange()}
                    disabled={!editing}
                    value={item}
                  />
                )
              }
            </div>
            <div className="general-part section-part">
              <div className="section-part-title">
                {t('portfolioPage.intro.general')}
              </div>
              {
                Object.keys(general).map((item, idx) => {
                  if (item === 'type') {
                    return null;
                  }
                  return (
                    <TextField
                      id={idx.toString()}
                      key={idx}
                      className="custom-width-textfield"
                      floatingLabelFixed={true}
                      floatingLabelText={t(`portfolioPage.intro.${item}.label`)}
                      hintText={t(`portfolioPage.intro.${item}.hintText`)}
                      onChange={this.handleGeneralChange(item)}
                      disabled={!editing}
                      value={general[item]}
                    />
                  )
                })
              }
            </div>
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
    const { _id, name = '', intro = {} } = data;
    const { currentLang, role } = state.user;
    return {
      _id,
      name,
      role,
      currentLang,
      content: intro
    }
  },
  (dispatch) => {
    return {
      setPortfolioData: (id, data) => { dispatch(setPortfolioData(id, data)); }
    }
  }
)(PortfolioIntroSection);