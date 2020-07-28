import {combineReducers} from 'redux';
import SearchReducer from './SearchReducer';


const rootReducer = combineReducers({
  search: SearchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
