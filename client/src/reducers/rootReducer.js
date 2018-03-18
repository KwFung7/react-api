import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { portfolio } from '../reducers/portfolioReducer';
import { setting } from '../reducers/settingReducer';
import { user } from '../reducers/userReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  setting,
  portfolio,
  user
});

export default rootReducer;