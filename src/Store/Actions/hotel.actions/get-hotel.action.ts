import {GET_HOTEL, GetHotelType} from './hotel-actions.type';
import {HOTEL_DETAILS} from '../../../URLS';

export function GetHotel(id: number): GetHotelType {
  return {
    type: GET_HOTEL,
    target: 'hotel',
    url: HOTEL_DETAILS + '?hotel_id=' + id,
    method: 'GET',
  };
}
