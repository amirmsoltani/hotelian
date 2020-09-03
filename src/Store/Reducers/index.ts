import {combineReducers} from 'redux';
import SearchReducer from './search.reducer';
import UserReducer from './user.reducer';
import {MemoryHistory} from 'history'
  ;

const {connectRouter} = require('connected-react-router');

const rootReducer = (history: MemoryHistory) => combineReducers({
  searchReducer: SearchReducer,
  userReducer: UserReducer,
  router: connectRouter(history),
});

export default rootReducer;
