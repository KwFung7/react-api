import { combineReducers } from 'redux';
import { portfolio } from '../reducers/portfolioReducer';
import { setting } from '../reducers/settingReducer';

const rootReducer = combineReducers({
  setting,
  portfolio
});

export default rootReducer;