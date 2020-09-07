import {combineReducers} from 'redux';
import SearchReducer from './search.reducer';
import UserReducer from './user.reducer';
import HotelReducer from './hotels.reducer';
import {MemoryHistory} from 'history'
  ;

const {connectRouter} = require('connected-react-router');

const rootReducer = (history: MemoryHistory) => combineReducers({
  searchReducer: SearchReducer,
  userReducer: UserReducer,
  hotelReducer: HotelReducer,
  router: connectRouter(history),
});

export default rootReducer;
