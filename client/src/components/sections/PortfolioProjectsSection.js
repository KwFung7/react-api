import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Paper, TextField, Chip, Avatar } from 'material-ui';
import FormControlSection from '../FormControlSection';
import { t } from '../../modules/I18n';
import ActionAssignmentInd from 'material-ui/svg-icons/action/assignment-ind';
import { GUEST_ROLE, WORD_LIMIT } from '../../constants';
import { setPortfolioData } from '../../actions/portfolioActions';
import TextFieldList from '../TextFieldList';
import templateData from '../../data/template.json';

class PortfolioProjectsSection extends Component {
  constructor(props) {
    super(props);
    
    const { title: pageTitle, ios_app = [] } = props.content;
    this.state = {
      editing: false,
      formData: {
        pageTitle,
        ios_app
      }
    };
  }

  handleListChange = (field, path) => (e, newValue) => {
    const { fieldIdx, obj, idx } = path;
    let newArray = this.state.formData[field];
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

  handleListAddBtnClick = (field) => {
    let newArray = this.state.formData[field];
    const template = templateData[field];
    newArray.push({ ...template, id: newArray.length + 1 });

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

    !_.isEmpty(newArray) && this.setState({
      formData: {
        ...this.state.formData,
        [field]: newArray
      }
    });
  };

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

  handleEditBtnClick = () => {
    this.setState({ editing: true });
  };

  handleCompleteBtnClick = () => {
    const { _id, content, setPortfolioData } = this.props;
    const { pageTitle, ios_app } = this.state.formData;
    const payload = {
      projects: {
        ...content,
        title: pageTitle,
        ios_app
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
                if (_.isArray(formData[obj])) {
                  return (
                    <div key={key} className={`${obj}-part section-part`}>
                      {
                        formData[obj].map((item, idx) => {
                          return (
                            <TextFieldList
                              key={`${key}-${idx}`}
                              fieldIdx={idx}
                              field={obj}
                              content={item}
                              type={'projects'}
                              disabled={!editing}
                              handleChange={this.handleListChange}
                              handleAddBtnClick={this.handleAddBtnClick}
                              handleRemoveBtnClick={this.handleRemoveBtnClick}
                              handleListAddBtnClick={this.handleListAddBtnClick}
                              handleListRemoveBtnClick={this.handleListRemoveBtnClick}
                            />
                          )
                        })
                      }
                    </div>
                  )
                } else {
                  return (
                    <TextField
                      key={key}
                      className="custom-width-textfield"
                      floatingLabelFixed={true}
                      floatingLabelText={t(`portfolioPage.projects.${obj}.label`)}
                      hintText={t(`portfolioPage.projects.${obj}.hintText`)}
                      onChange={this.handleChange(obj)}
                      disabled={!editing}
                      value={formData[obj]}
                    />
                  )
                }
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
    const { _id, name = '', projects = {} } = data;
    const { currentLang, role } = state.user;
    return {
      _id,
      name,
      role,
      currentLang,
      content: projects
    }
  },
  (dispatch) => {
    return {
      setPortfolioData: (id, data) => { dispatch(setPortfolioData(id, data)); }
    }
  }
)(PortfolioProjectsSection);