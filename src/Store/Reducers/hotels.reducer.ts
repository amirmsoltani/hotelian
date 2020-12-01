import {HotelsStateInterface} from '../../Typescript';
import {
  GET_HOTELS,
  HotelsActionTypes,
  SET_HOTELS,
  SET_HOTELS_AFTER_FILTERS,
  SET_SEARCH_ID,
} from '../Actions';

export const hotelsInit: HotelsStateInterface = {
    status: null,
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
    case SET_HOTELS_AFTER_FILTERS: {
      return {
        ...state,
        filter: {
          ...state.filter!,
          hotels: [...action.payload.hotels],
          actives: action.payload.actives,
          sortBy: action.payload.sorting ? action.payload.sorting : state.filter!.sortBy!,
        },
      };
    }
    default:
      return state;
  }
};

export default HotelsReducer;
