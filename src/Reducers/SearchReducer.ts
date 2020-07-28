import {SearchReducerActions, SearchReducerState} from 'src/Types/SearchTypes';
import {SET_DESTINATIONS_LIST, SET_SEARCH_DATA, SET_NATIONALITIES_LIST} from '../Actions/TypesActions';

export const searchInit: SearchReducerState = {
  destinations: [],
  nationalities: [],
  searchData: {rooms: [{adults: 1, child: 0}], adultCounts: 1, childCounts: 0},
};
const SearchReducer = (state: SearchReducerState = searchInit, action: SearchReducerActions): SearchReducerState => {
  switch (action.type) {
    case SET_DESTINATIONS_LIST:
      return {...state, destinations: action.payload};
    case SET_NATIONALITIES_LIST:
      return {...state, nationalities: action.payload};
    case SET_SEARCH_DATA:
      return {...state, searchData: {...state.searchData, ...action.payload}};
    default:
      return state;
  }
};

export default SearchReducer;
