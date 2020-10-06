import {SearchStateInterface} from '../../Typescript';
import {
  ACCEPT_SEARCH_FORM,
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
  destination: {GET: 'idle', list: []},
  nationality: {GET: 'idle', list: []},
  form_data: {rooms: [{adults: 1, children: [], key: randInt(0xff)}], adultCounts: 1, childCounts: 0},
  status: undefined,
};
export const searchInit = async (): Promise<SearchStateInterface> => {
  let search_id;
  try {
    search_id = await Storage.load({key: 'search-id'});
    defaultData.status = 'ok';
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
      return {
        ...state,
        [action.payload.target]: {
          [action.payload.method]: (action.payload.response!.length === 0 ? 'notFound' : 'ok'),
          list: action.payload.response,
        },
      };
    }
    case CHANGE_SEARCH_FORM_DATA: {
      return {...state, form_data: {...state.form_data, ...action.payload}};
    }
    case SET_SEARCH_ID: {
      return {...state, search_id: action.payload, status: 'ok'};
    }
    case SEARCH_EXPIRE: {
      return {...state, search_id: 'expire'};
    }
    case ACCEPT_SEARCH_FORM: {
      return {...state, status: 'loading'};
    }
    default:
      return state;
  }
};

export default SearchReducer;
