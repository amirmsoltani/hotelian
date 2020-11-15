import {combineReducers} from 'redux';
import SearchReducer, {searchInit} from './search.reducer';
import AppReducer, {appInit} from './app.reducer';
import HotelsReducer, {hotelsInit} from './hotels.reducer';
import HotelReducer, {hotelInit} from './hotel.reducer';
import NavigationReducer from './navigation.reducer';
import {MemoryHistory} from 'history';

const rootReducer = (history: MemoryHistory) => combineReducers({
  searchReducer: SearchReducer,
  appReducer: AppReducer,
  hotelsReducer: HotelsReducer,
  hotelReducer: HotelReducer,
  navigation: NavigationReducer,
});
export const Initial = {
  searchInit,
  appInit,
  hotelsInit,
};


export default rootReducer;
