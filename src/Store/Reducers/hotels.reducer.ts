import {HotelsStateInterface} from '../../Typescript';
import {
  GET_HOTELS,
  HotelsActionTypes,
  SEARCH_EXPIRE,
  SET_HOTELS,
  SET_HOTELS_AFTER_FILTERS,
  SET_SEARCH_ID,
} from '../Actions';

export const hotelsInit: HotelsStateInterface = {
  status: null,
};
const HotelsReducer = (state: HotelsStateInterface = hotelsInit, action: HotelsActionTypes): HotelsStateInterface => {
  switch (action.type) {
    case GET_HOTELS:
    case SET_SEARCH_ID: {
      return {...state, status: 'loading'};
    }
    case SET_HOTELS: {
      return {...state, ...action.payload};
    }
    case SEARCH_EXPIRE: {
      return {...state, status: 'expire'};
    }
    case SET_HOTELS_AFTER_FILTERS: {
      return {
        ...state,
        filter: {
          structure:state.filter!.structure,
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
