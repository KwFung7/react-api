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


  handleAddBtnClick = (field, path) => {
    const { fieldIdx, obj } = path;
    let newArray = this.state.formData[field];
    newArray[fieldIdx][obj].push('');

    this.setState({
      formData: {
        ...this.state.formData,
        [field]: newArray
      }
    });
  };

  handleRemoveBtnClick = (field, path) => {
    const { fieldIdx, obj, idx } = path;
    let newArray = this.state.formData[field];
    newArray[fieldIdx][obj] = newArray[fieldIdx][obj].filter((item, index) => { return index !== idx });

    this.setState({
      formData: {
        ...this.state.formData,
        [field]: newArray
      }
    });
  };

  handleListAddBtnClick = (field, idx) => {
    let newArray = this.state.formData[field];
    const template = {
      name: '',
      short_name: '',
      type: '',
      site: '',
      details: ['', ''],
      code_images: [''],
      scenes: ['', '', '', '']
    }
    newArray.push(template);

    this.setState({
      formData: {
        ...this.state.formData,
        [field]: newArray
      }
    });
  };

  handleListRemoveBtnClick = (field, idx) => {
    let newArray = this.state.formData[field];
    newArray = newArray.filter((item, index) => { return index !== idx });

    this.setState({
      formData: {
        ...this.state.formData,
        [field]: newArray
      }
    });
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

  handleExperienceChange = (field, path) => (e, newValue) => {
    const { fieldIdx, obj, idx } = path;
    const { experience = {} } = this.state.formData;
    let newArray = experience[field];
    if (_.isUndefined(idx)) {
      newArray[fieldIdx][obj] = newValue;
    } else {
      newArray[fieldIdx][obj][idx] = newValue;
    }

    this.setState({
      formData: {
        ...this.state.formData,
        [field]: newArray 
      }
    })
  };

  render() {
    const { formData, editing } = this.state;
    const { name, role } = this.props;
    const isGuest = role === GUEST_ROLE;
    const { message = [], general = {}, experience = {}, skill = {}, education = {}, language = {}} = formData;
    const { jobs = [] } = experience;

    return (
      <Paper className="portfolio-page-body page-body">
        <Chip style={{ marginBottom: '2rem' }} labelColor='grey'>
          <Avatar icon={<ActionAssignmentInd />} />
          {name}
        </Chip>
        <div className="gradient-layer">
          <div className="scroll-view">
            {/* ------------ Message ------------ */}
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
            {/* ------------ General ------------ */}
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
            {/* ------------ Experience ------------ */}
            <div className="experience-part section-part">
              <div className="section-part-title">
                {t('portfolioPage.intro.experience')}
              </div>
              {
                jobs.map((item, idx) => {
                  return (
                    <TextFieldList
                      key={idx}
                      fieldIdx={idx}
                      field={'jobs'}
                      content={item}
                      type={'intro'}
                      disabled={!editing}
                      handleChange={this.handleExperienceChange}
                      handleAddBtnClick={this.handleAddBtnClick}
                      handleRemoveBtnClick={this.handleRemoveBtnClick}
                      handleListAddBtnClick={this.handleListAddBtnClick}
                      handleListRemoveBtnClick={this.handleListRemoveBtnClick}
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