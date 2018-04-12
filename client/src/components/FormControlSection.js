import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { t } from '../modules/I18n';

class FormControlSection extends Component {
  render() {
    const { editBtnOnClick, completeBtnOnClick, disabledEditBtn, disabledCompleteBtn } = this.props;
    return (
      <div className="container">
        <RaisedButton
          label={t('common.editBtnLabel')}
          icon={<ContentCreate />}
          labelPosition='after'
          primary={true}
          labelStyle={{ textTransform: 'normal' }}
          style={{ margin: '2rem 0.5rem 1rem', minWidth: 100 }}
          onClick={editBtnOnClick}
          disabled={disabledEditBtn}
        />
        <RaisedButton
          label={t('common.completeBtnLabel')}
          icon={<ActionDoneAll />}
          labelPosition='after'
          secondary={true}
          labelStyle={{ textTransform: 'normal' }}
          style={{ margin: '2rem 0.5rem 1rem', minWidth: 100 }}
          onClick={completeBtnOnClick}
          disabled={disabledCompleteBtn}
        />
      </div>
    )
  }
}

export default FormControlSection;