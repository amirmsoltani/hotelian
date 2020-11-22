import {HOTEL_ROOMS} from 'URLS';
import {Dispatch} from 'redux';
import {HttpResultInterface, RoomsDetailsInterface} from 'Typescript';
import Http from 'Lib/Http';
import {SetHotelRooms} from './set-rooms.action';

export const GetHotelRooms = ({search_id, hotel_id}: {hotel_id: number, search_id: string}) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await Http.request<HttpResultInterface<RoomsDetailsInterface>>({
        url: `${HOTEL_ROOMS}?hotel_id=${hotel_id}&search_id=${search_id}`,
        method: 'GET',
      });
      const rooms = response.data.result;
      dispatch(SetHotelRooms(rooms));
    } catch (e) {
      console.log(e);
    }
  };



