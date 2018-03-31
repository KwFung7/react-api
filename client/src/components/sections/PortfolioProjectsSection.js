import React, { Component } from 'react';
import { Paper } from 'material-ui';
import FormControlSection from '../FormControlSection';

class PortfolioProjectsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  handleEditBtnClick = () => {
    this.setState({ editing: true });
  };

  handleCompleteBtnClick = () => {
    this.setState({ editing: false });
  };

  render() {
    return (
      <Paper className="portfolio-page-body page-body">
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
export default PortfolioProjectsSection;