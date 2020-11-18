import {HotelStateInterface} from 'Typescript';
import {
  GET_HOTEL,
  GET_HOTELS_ROOMS,
  HotelActionsType,
  SET_HOTEL_DATA,
  SET_HOTELS_ROOMS,
} from '../Actions/hotel.actions';

export const hotelInit: HotelStateInterface = {
  hotel: {status: undefined},
  rooms: {status: undefined},
};

const hotelReducer = (state: HotelStateInterface = hotelInit, action: HotelActionsType) => {
  switch (action.type) {
    case GET_HOTEL:
    case GET_HOTELS_ROOMS: {
      const target = action.type.includes('rooms') ? 'rooms' : 'hotel';
      return {
        ...state,
        [target]: {...state[target], status: 'loading'},
      };
    }
    case SET_HOTEL_DATA:
    case SET_HOTELS_ROOMS: {
      return {...state, [action.type.includes('rooms') ? 'rooms' : 'hotel']: {status: 'ok', result: action.payload}};
    }
    default:
      return state;
  }
};

export default hotelReducer;
