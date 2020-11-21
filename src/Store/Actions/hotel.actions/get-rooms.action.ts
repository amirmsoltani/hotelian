import {GET_HOTELS_ROOMS, GetHotelRoomsType} from './hotel-actions.type';
import {HOTEL_ROOMS} from 'URLS';

export const GetHotelRooms = ({search_id, hotel_id}: {hotel_id: number, search_id: string}): GetHotelRoomsType => ({
  type: GET_HOTELS_ROOMS,
  url: HOTEL_ROOMS + `?hotel_id=${hotel_id}&search_id=${search_id}`,
  search_id,
  hotel_id,
});


