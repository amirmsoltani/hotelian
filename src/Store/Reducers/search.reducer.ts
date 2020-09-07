import {SearchStateInterface} from '../../Typescript';
import {
  CHANGE_SEARCH_FORM_DATA,
  GET_DESTINATION,
  GET_NATIONALITY,
  SEARCH_EXPIRE,
  SearchActionTypes,
  SET_SEARCH_ID,
  SET_SEARCH_RESPONSE,
} from '../Actions/search.actions';
import {randInt} from '../../Lib/Random';
import Storage from '../../Lib/Storage';

const defaultData: SearchStateInterface = {
  destination: {GET: undefined, list: undefined},
  nationality: {GET: undefined, list: undefined},
  form_data: {rooms: [{adults: 1, children: [], key: randInt(0xff)}], adultCounts: 1, childCounts: 0},
};
export const searchInit = async (): Promise<SearchStateInterface> => {
  let search_id;
  try {
    search_id = await Storage.load({key: 'search-id'});
  } catch (e) {
    search_id = undefined;
  }
  defaultData.search_id = search_id;
  return defaultData;
};
const SearchReducer = (state: SearchStateInterface = defaultData, action: SearchActionTypes): SearchStateInterface => {
  switch (action.type) {
    case GET_NATIONALITY:
    case GET_DESTINATION: {
      return {...state, [action.target]: {...state[action.target], [action.method]: 'loading'}};
    }

    case SET_SEARCH_RESPONSE: {
      return {...state, [action.payload.target]: {[action.payload.method]: 'ok', list: action.payload.response}};
    }
    case CHANGE_SEARCH_FORM_DATA: {
      return {...state, form_data: {...state.form_data, ...action.payload}};
    }
    case SET_SEARCH_ID: {
      return {...state, search_id: action.payload};
    }
    case SEARCH_EXPIRE: {
      return {...state, search_id: 'expire'};
    }
    default:
      return state;
  }
};

export default SearchReducer;
