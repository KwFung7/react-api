import React, { Component } from 'react';
import { TextField } from 'material-ui';
import _ from 'lodash';
import { t } from '../modules/I18n';

class TextFieldList extends Component {
  render() {
    let { title, content = {}, disabled } = this.props;
    content = _.omit(content, ['id', '_id']);

    return (
      <div>
        <div style={{ color: 'grey', margin: '2rem 0 0.5rem' }}>{title}</div>
        {
          Object.keys(content).map((obj, key) => {
            if (_.isArray(content[obj])) {
              return (
                <div key={key} className={`${obj}-list section-list`}>
                  {
                    content[obj].map((item, idx) => {
                      return (
                        <TextField
                          id={`${key}-${idx}`}
                          key={`${key}-${idx}`}
                          className="custom-width-textfield"
                          floatingLabelFixed={true}
                          floatingLabelText={idx === 0 ? t(`portfolioPage.projects.${obj}.label`) : ''}
                          hintText={`${t(`portfolioPage.projects.${obj}.hintText`)} ${idx + 1}`}
                          // onChange={this.handleChange(obj)}
                          disabled={disabled}
                          value={item}
                        />
                      )
                    })
                  }
                </div>
              )
            } else {
              return (
                <TextField
                  id={key.toString()}
                  key={key}
                  className="custom-width-textfield"
                  floatingLabelFixed={true}
                  floatingLabelText={t(`portfolioPage.projects.${obj}.label`)}
                  hintText={t(`portfolioPage.projects.${obj}.hintText`)}
                  // onChange={this.handleChange(obj)}
                  disabled={disabled}
                  value={content[obj]}
                />
              )
            }
          })
        }
      </div>
    )
  }
}

export default TextFieldList;