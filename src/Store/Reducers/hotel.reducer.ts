import {HotelStateInterface} from 'Typescript';
import {GET_HOTEL, HotelActionsType, SET_HOTEL_DATA} from '../Actions/hotel.actions';

export const hotelInit: HotelStateInterface = {
  hotel: {status: undefined},
  rooms: {status: undefined},
};

const hotelReducer = (state: HotelStateInterface = hotelInit, action: HotelActionsType) => {
  switch (action.type) {
    case GET_HOTEL: {
      return {...state, [action.target]: {...state[action.target], status: 'loading'}};
    }
    case SET_HOTEL_DATA: {
      return {...state, [action.payload.target]: {status: 'ok', result: action.payload.response}};
    }
    default:
      return state;
  }
};

export default hotelReducer;
