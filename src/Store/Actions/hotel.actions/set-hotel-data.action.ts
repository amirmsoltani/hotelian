import {SET_HOTEL_DATA, SetHotelDataType} from './hotel-actions.type';
import {HotelDetailsInterface} from 'Typescript';

export function SetHotelData(response: HotelDetailsInterface): SetHotelDataType {
  return {
    type: SET_HOTEL_DATA,
    payload: response,
  };
}
