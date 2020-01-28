import { combineReducers } from 'redux';
import date from '../containers/DateRedux';
import history from '../containers/HistoryRedux';

export default combineReducers({
  date,
  history
});
