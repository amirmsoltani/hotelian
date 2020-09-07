import {combineReducers} from 'redux';
import SearchReducer, {searchInit} from './search.reducer';
import UserReducer, {userInit} from './user.reducer';
import HotelReducer, {hotelsInit} from './hotels.reducer';
import {MemoryHistory} from 'history';

const {connectRouter} = require('connected-react-router');
const rootReducer = (history: MemoryHistory) => combineReducers({
  searchReducer: SearchReducer,
  userReducer: UserReducer,
  hotelsReducer: HotelReducer,
  router: connectRouter(history),
});
export const Initial = {searchInit, userInit, hotelsInit};


export default rootReducer;
