import {combineReducers} from 'redux';
import SearchReducer, {searchInit} from './search.reducer';
import AppReducer, {appInit} from './app.reducer';
import HotelReducer, {hotelsInit} from './hotels.reducer';
import {MemoryHistory} from 'history';

const {connectRouter} = require('connected-react-router');
const rootReducer = (history: MemoryHistory) => combineReducers({
  searchReducer: SearchReducer,
  appReducer: AppReducer,
  hotelsReducer: HotelReducer,
  router: connectRouter(history),
});
export const Initial = {searchInit, appInit, hotelsInit};


export default rootReducer;
