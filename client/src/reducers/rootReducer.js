import { combineReducers } from 'redux';
import { portfolio } from '../reducers/portfolioReducer';
import { setting } from '../reducers/settingReducer';
import { user } from '../reducers/userReducer';

const rootReducer = combineReducers({
  setting,
  portfolio,
  user
});

export default rootReducer;