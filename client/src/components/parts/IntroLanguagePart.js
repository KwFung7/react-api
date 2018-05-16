import React, { Component } from 'react';
import { t } from '../../modules/I18n';
import TextFieldList from '../TextFieldList';

class IntroLanguagePart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: props.content
    };
  }

  handleAddBtnClick = (field, path) => {
    const { obj } = path;
    let newArray = this.state.language[obj];
    newArray.push('');

    this.setState({
      language: {
        ...this.state.language,
        [obj]: newArray
      }
    }, () => {
      this.props.updateFormData('language', this.state.language);
    });
  };

  handleRemoveBtnClick = (field, path) => {
    const { obj, idx } = path;
    let newArray = this.state.language[obj];
    newArray = newArray.filter((item, index) => { return index !== idx });

    this.setState({
      language: {
        ...this.state.language,
        [obj]: newArray
      }
    }, () => {
      this.props.updateFormData('language', this.state.language);
    });
  };

  handleLanguageChange = (field, path) => (e, newValue) => {
    const { obj, idx } = path;
    let newArray = this.state.language[obj];
    newArray[idx] = newValue;

    this.setState({
      language: {
        ...this.state.language,
        [obj]: newArray
      }
    }, () => {
      this.props.updateFormData('language', this.state.language);
    })
  };

  render() {
    const { editing } = this.props;

    return (
      <div className="language-part section-part">
        <div className="section-part-title">
          {t('portfolioPage.intro.language')}
        </div>
        <TextFieldList
          type={'intro'}
          disabled={!editing}
          content={this.state.language}
          handleChange={this.handleLanguageChange}
          handleAddBtnClick={this.handleAddBtnClick}
          handleRemoveBtnClick={this.handleRemoveBtnClick}
        />
      </div>
    )
  }
}

export default IntroLanguagePart;