import React, { Component } from 'react';
import { TextField, IconButton } from 'material-ui';
import _ from 'lodash';
import { t } from '../modules/I18n';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';

class TextFieldList extends Component {
  render() {
    let { fieldIdx, field, content, disabled, handleChange, handleAddBtnClick, handleRemoveBtnClick } = this.props;
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
                        <div key={`${key}-${idx}`} className="section-list-item">
                          {
                            content[obj].length > 1 && !disabled &&
                            <IconButton
                              tooltip={disabled ? '' : t('iconBtnTooltip.remove')}
                              iconStyle={{ color: 'red' }}
                              style={{ position: 'absolute', bottom: -3, right: 6 }}
                              onClick={() => { handleRemoveBtnClick(field, path); }}
                            >
                              <ContentRemoveCircle />
                            </IconButton>
                          }
                          <TextField
                            className="custom-width-textfield"
                            floatingLabelFixed={true}
                            floatingLabelText={idx === 0 ? t(`portfolioPage.projects.${obj}.label`) : ''}
                            hintText={`${t(`portfolioPage.projects.${obj}.hintText`)} ${idx + 1}`}
                            onChange={handleChange(field, path)}
                            disabled={disabled}
                            value={item}
                          />
                        </div>
                      )
                    })
                  }
                  {
                    !disabled &&
                    <IconButton
                      tooltip={disabled ? '' : t('iconBtnTooltip.add')}
                      iconStyle={{ color: 'green' }}
                      style={{ position: 'absolute', top: 0, right: 6 }}
                      onClick={() => { handleAddBtnClick(field, { fieldIdx, obj }); }}
                    >
                      <ContentAddCircle />
                    </IconButton>
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