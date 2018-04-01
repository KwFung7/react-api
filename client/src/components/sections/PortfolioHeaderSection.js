import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, TextField, Chip, Avatar } from 'material-ui';
import FormControlSection from '../FormControlSection';
import { t } from '../../modules/I18n';
import ActionAssignmentInd from 'material-ui/svg-icons/action/assignment-ind';

class PortfolioHeaderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      formData: {
        userName: '',
        position: ''
      }
    };
  }

  handleChange = (field) => (e, newValue) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [field]: newValue
      }
    });
  };

  handleEditBtnClick = () => {
    this.setState({ editing: true });
  };

  handleCompleteBtnClick = () => {
    this.setState({ editing: false });
  };

  render() {
    const { userName, position } = this.state.formData;
    return (
      <Paper className="portfolio-page-body page-body">
        <Chip style={{ marginBottom: '2rem' }} labelColor='grey'>
          <Avatar icon={<ActionAssignmentInd />} />
          {this.props.name}
        </Chip>
        <TextField
          floatingLabelFixed={true}
          floatingLabelText={t('portfolioPage.header.userName')}
          hintText={t('portfolioPage.header.userNameHintText')}
          onChange={this.handleChange('userName')}
          value={userName}
        />
        <TextField
          floatingLabelFixed={true}
          floatingLabelText={t('portfolioPage.header.position')}
          hintText={t('portfolioPage.header.positionHintText')}
          onChange={this.handleChange('position')}
          value={position}
        />
        <FormControlSection
          disabledEditBtn={false}
          disabledCompleteBtn={false}
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
    return {
      name,
      content: header
    }
  }
)(PortfolioHeaderSection);