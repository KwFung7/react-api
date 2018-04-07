import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { portfolio } from '../reducers/portfolioReducer';
import { setting } from '../reducers/settingReducer';
import { user } from '../reducers/userReducer';
import { serverLog } from '../reducers/logReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  setting,
  portfolio,
  user,
  serverLog
});

export default rootReducer;