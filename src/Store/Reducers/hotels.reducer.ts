import {HotelsStateInterface} from '../../Typescript';
import {GET_HOTELS, HotelsActionTypes, SET_SEARCH_ID} from '../Actions';

export const hotelsInit: HotelsStateInterface = {
  status: undefined,
  search_id: undefined,
};
const HotelsReducer = (state: HotelsStateInterface = hotelsInit, action: HotelsActionTypes): HotelsStateInterface => {
  switch (action.type) {
    case GET_HOTELS:
    case SET_SEARCH_ID: {
      return {...state, status: 'loading'};
    }
    default:
      return state;
  }
};

export default HotelsReducer;
