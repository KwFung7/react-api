import React, { Component } from 'react';
import { t } from '../../modules/I18n';
import TextFieldList from '../TextFieldList';
import _ from 'lodash';
import templateData from '../../data/template.json';

class IntroExperiencePart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: props.content
    };
  }

  handleAddBtnClick = (field, path) => {
    const { fieldIdx, obj } = path;
    let newArray = this.state.experience[field];
    newArray[fieldIdx][obj].push('');

    this.setState({
      experience: {
        ...this.state.experience,
        [field]: newArray
      }
    }, () => {
      this.props.updateFormData('experience', this.state.experience);
    });
  };

  handleRemoveBtnClick = (field, path) => {
    const { fieldIdx, obj, idx } = path;
    let newArray = this.state.experience[field];
    newArray[fieldIdx][obj] = newArray[fieldIdx][obj].filter((item, index) => { return index !== idx });

    this.setState({
      experience: {
        ...this.state.experience,
        [field]: newArray
      }
    }, () => {
      this.props.updateFormData('experience', this.state.experience);
    });
  };

  handleListAddBtnClick = (field) => {
    let newArray = this.state.experience[field];
    const template = templateData[field];
    newArray.push({ ...template, id: newArray.length + 1 });

    this.setState({
      experience: {
        ...this.state.experience,
        [field]: newArray
      }
    }, () => {
      this.props.updateFormData('experience', this.state.experience);
    });
  };

  handleListRemoveBtnClick = (field, idx) => {
    let newArray = this.state.experience[field];
    newArray = newArray.filter((item, index) => { return index !== idx });

    !_.isEmpty(newArray) &&
    this.setState({
      experience: {
        ...this.state.experience,
        [field]: newArray
      }
    }, () => {
      this.props.updateFormData('experience', this.state.experience);
    });
  };

  handleExperienceChange = (field, path) => (e, newValue) => {
    const { fieldIdx, obj, idx } = path;
    let newArray = this.state.experience[field];
    if (_.isUndefined(idx)) {
      newArray[fieldIdx][obj] = newValue;
    } else {
      newArray[fieldIdx][obj][idx] = newValue;
    }

    this.setState({
      experience: {
        ...this.state.experience,
        [field]: newArray 
      }
    }, () => {
      this.props.updateFormData('experience', this.state.experience);
    })
  };

  render() {
    const { editing } = this.props;
    const { jobs = [] } = this.state.experience;

    return (
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
    )
  }
}

export default IntroExperiencePart;