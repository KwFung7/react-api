import React, { Component } from 'react';
import { TextField } from 'material-ui';
import _ from 'lodash';
import { t } from '../modules/I18n';

class TextFieldList extends Component {
  render() {
    let { fieldIdx, field, content, disabled, handleChange } = this.props;
    content = _.omit(content, ['id', '_id']);

    return (
      <div>
        <div style={{ color: 'grey', margin: '2rem 0 0.5rem' }}>
          {field.replace('_', ' ').toUpperCase()} {fieldIdx + 1}
        </div>
        {
          Object.keys(content).map((obj, key) => {
            if (_.isArray(content[obj])) {
              return (
                <div key={key} className={`${obj}-list section-list`}>
                  {
                    content[obj].map((item, idx) => {
                      const path = {
                        fieldIdx,
                        obj,
                        idx
                      }
                      return (
                        <TextField
                          id={`${key}-${idx}`}
                          key={`${key}-${idx}`}
                          className="custom-width-textfield"
                          floatingLabelFixed={true}
                          floatingLabelText={idx === 0 ? t(`portfolioPage.projects.${obj}.label`) : ''}
                          hintText={`${t(`portfolioPage.projects.${obj}.hintText`)} ${idx + 1}`}
                          onChange={handleChange(field, path)}
                          disabled={disabled}
                          value={item}
                        />
                      )
                    })
                  }
                </div>
              )
            } else {
              const path = {
                fieldIdx,
                obj
              }
              return (
                <TextField
                  id={key.toString()}
                  key={key}
                  className="custom-width-textfield"
                  floatingLabelFixed={true}
                  floatingLabelText={t(`portfolioPage.projects.${obj}.label`)}
                  hintText={t(`portfolioPage.projects.${obj}.hintText`)}
                  onChange={handleChange(field, path)}
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