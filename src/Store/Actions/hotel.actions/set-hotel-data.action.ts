import {HotelHttpActionsType, SET_HOTEL_DATA, SetHotelDataType} from './hotel-actions.type';

export function SetHotelData(action: HotelHttpActionsType, response: typeof action.response): SetHotelDataType {
  action.response = response;
  return {
    type: SET_HOTEL_DATA,
    payload: action,
  };
}
