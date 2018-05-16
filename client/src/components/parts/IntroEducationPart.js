import React, { Component } from 'react';
import { t } from '../../modules/I18n';
import TextFieldList from '../TextFieldList';
import _ from 'lodash';
import templateData from '../../data/template.json';

class IntroEducationPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: props.content
    };
  }

  handleListAddBtnClick = (field) => {
    let newArray = this.state.education[field];
    newArray.push(templateData.education);

    this.setState({
      education: {
        ...this.state.education,
        [field]: newArray
      }
    }, () => {
      this.props.updateFormData('education', this.state.education);
    });
  };

  handleListRemoveBtnClick = (field, idx) => {
    let newArray = this.state.education[field];
    newArray = newArray.filter((item, index) => { return index !== idx });

    !_.isEmpty(newArray) &&
    this.setState({
      education: {
        ...this.state.education,
        [field]: newArray
      }
    }, () => {
      this.props.updateFormData('education', this.state.education);
    });
  };

  handleEducationChange = (field, path) => (e, newValue) => {
    const { fieldIdx, obj } = path;
    let newArray = this.state.education[field];
    newArray[fieldIdx][obj] = newValue;

    this.setState({
      education: {
        ...this.state.education,
        [field]: newArray 
      }
    }, () => {
      this.props.updateFormData('education', this.state.education);
    })
  };

  render() {
    const { editing } = this.props;
    const { details = [] } = this.state.education;

    return (
      <div className="education-part section-part">
        <div className="section-part-title">
          {t('portfolioPage.intro.education')}
        </div>
        {
          details.map((item, idx) => {
            return (
              <TextFieldList
                key={idx}
                fieldIdx={idx}
                field={'details'}
                content={item}
                type={'intro'}
                disabled={!editing}
                handleChange={this.handleEducationChange}
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

export default IntroEducationPart;