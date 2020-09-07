import {HotelsStateInterface} from '../../Typescript';
import {GET_HOTELS, HotelsActionTypes, SEARCH_EXPIRE, SET_HOTELS, SET_SEARCH_ID} from '../Actions';

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
      return {...action.payload};
    }
    case SEARCH_EXPIRE: {
      return {...state, status: 'expire'};
    }
    default:
      return state;
  }
};

export default HotelsReducer;
