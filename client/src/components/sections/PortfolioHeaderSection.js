import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, TextField, Chip, Avatar } from 'material-ui';
import FormControlSection from '../FormControlSection';
import { t } from '../../modules/I18n';
import ActionAssignmentInd from 'material-ui/svg-icons/action/assignment-ind';
import { GUEST_ROLE, WORD_LIMIT } from '../../constants';

class PortfolioHeaderSection extends Component {
  constructor(props) {
    super(props);

    const { name, position } = props.content;
    this.state = {
      editing: false,
      formData: {
        userName: name,
        position
      }
    };
  }

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

  handleEditBtnClick = () => {
    this.setState({ editing: true });
  };

  handleCompleteBtnClick = () => {
    this.setState({ editing: false });
  };

  render() {
    const { formData, editing } = this.state;
    const { name, role } = this.props;
    const { userName, position } = formData;
    const isGuest = role === GUEST_ROLE;

    return (
      <Paper className="portfolio-page-body page-body">
        <Chip style={{ marginBottom: '2rem' }} labelColor='grey'>
          <Avatar icon={<ActionAssignmentInd />} />
          {name}
        </Chip>
        <TextField
          floatingLabelFixed={true}
          floatingLabelText={t('portfolioPage.header.userName')}
          hintText={t('portfolioPage.header.userNameHintText')}
          onChange={this.handleChange('userName')}
          disabled={!editing}
          value={userName}
        />
        <TextField
          floatingLabelFixed={true}
          floatingLabelText={t('portfolioPage.header.position')}
          hintText={t('portfolioPage.header.positionHintText')}
          onChange={this.handleChange('position')}
          disabled={!editing}
          value={position}
        />
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
    const { name = '', header = {} } = data;
    const { currentLang, role } = state.user;
    return {
      name,
      role,
      currentLang,
      content: header
    }
  }
)(PortfolioHeaderSection);