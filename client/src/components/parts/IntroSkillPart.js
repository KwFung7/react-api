import React, { Component } from 'react';
import { t } from '../../modules/I18n';
import TextFieldList from '../TextFieldList';

class IntroSkillPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: props.content
    };
  }

  handleAddBtnClick = (field, path) => {
    const { obj } = path;
    let newArray = this.state.skill[obj];
    newArray.push('');

    this.setState({
      skill: {
        ...this.state.skill,
        [obj]: newArray
      }
    }, () => {
      this.props.updateFormData('skill', this.state.skill);
    });
  };

  handleRemoveBtnClick = (field, path) => {
    const { obj, idx } = path;
    let newArray = this.state.skill[obj];
    newArray = newArray.filter((item, index) => { return index !== idx });

    this.setState({
      skill: {
        ...this.state.skill,
        [obj]: newArray
      }
    }, () => {
      this.props.updateFormData('skill', this.state.skill);
    });
  };

  handleSkillChange = (field, path) => (e, newValue) => {
    const { obj, idx } = path;
    let newArray = this.state.skill[obj];
    newArray[idx] = newValue;

    this.setState({
      skill: {
        ...this.state.skill,
        [obj]: newArray
      }
    }, () => {
      this.props.updateFormData('skill', this.state.skill);
    })
  };

  render() {
    const { editing } = this.props;

    return (
      <div className="skill-part section-part">
        <div className="section-part-title">
          {t('portfolioPage.intro.skill')}
        </div>
        <TextFieldList
          type={'intro'}
          newFieldName={'skill'}
          disabled={!editing}
          content={this.state.skill}
          handleChange={this.handleSkillChange}
          handleAddBtnClick={this.handleAddBtnClick}
          handleRemoveBtnClick={this.handleRemoveBtnClick}
        />
      </div>
    )
  }
}

export default IntroSkillPart;