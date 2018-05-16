import React from 'react'
import * as constants from '../constants'

const textStyle = {
  color: 'grey',
  textAlign: 'center'
};
const NoMatch = ({ location }) =>
<div className="container-fluid justify-content-center align-items-center">
  <div style={{ ...textStyle, fontSize: '100px', fontFamily: 'harabara' }}>{constants.NO_MATCH_STATUS}</div>
  <div style={{ ...textStyle, fontSize: '40px', fontFamily: 'harabara' }}>{constants.NOT_FOUND}</div>
  <div style={{ ...textStyle, fontSize: '15px' }}>{constants.NO_MATCH_FOR}{location.pathname}</div>
</div>;

export default NoMatch