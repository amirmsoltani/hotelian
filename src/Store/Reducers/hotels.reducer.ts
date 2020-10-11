import {HotelsStateInterface} from '../../Typescript';
import {
  APPLY_HOTELS_FILTER,
  GET_HOTELS,
  HotelsActionTypes,
  SEARCH_EXPIRE,
  SET_HOTELS,
  SET_HOTELS_AFTER_FILTERS,
  SET_SEARCH_ID,
} from '../Actions';

export const hotelsInit: HotelsStateInterface = {
    status: null,
    change_filter: 0,
  }
;
const HotelsReducer = (state: HotelsStateInterface = hotelsInit, action: HotelsActionTypes): HotelsStateInterface => {
  switch (action.type) {
    case GET_HOTELS:
    case SET_SEARCH_ID: {
      return {...state, status: 'loading'};
    }
    case SET_HOTELS: {
      return {...state, ...action.payload, status: 'ok'};
    }
    case SEARCH_EXPIRE: {
      return {...state, status: 'expire'};
    }
    case SET_HOTELS_AFTER_FILTERS: {
      return {
        ...state,
        change_filter: state.change_filter + 1,
        filter: {
          ...state.filter!,
          hotels: action.payload.hotels,
          numbers: action.payload.structure,
          actives: action.payload.actives,
        },
      };
    }
    default:
      return state;
  }
};

export default HotelsReducer;
