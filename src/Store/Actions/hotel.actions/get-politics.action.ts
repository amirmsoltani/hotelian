import {Dispatch} from 'redux';
import {CancellationPolicyInterface, HttpResultInterface, RootStateInterface} from 'Typescript';
import {CANCELLATION_POLICY} from 'URLS';
import Http from 'Lib/Http';
import {SetHotelRooms} from './set-rooms.action';

export function get_politics(ids: string) {
  return async (dispatch: Dispatch, getState: () => RootStateInterface) => {
    const {searchReducer: {search_id}, hotelReducer: {hotel: {result}}} = getState();
    if (ids.length < 0 && search_id === 'expire' && !result!.hotel.id) {
      return;
    }
    try {
      const response = await Http.request<HttpResultInterface<{ [key in typeof ids]: CancellationPolicyInterface }>>({
        method: 'POST',
        data: {option_id: ids, hotel_id: result!.hotel.id, search_id: search_id},
        url: CANCELLATION_POLICY,
      });
      const {hotelReducer: {rooms}} = getState();
      const options = response.data.result;
      rooms.result!.options.map(option => {
        option.cancellation = options[option.option_id];
      });
      dispatch(SetHotelRooms(rooms.result!));
    } catch (e) {
      console.log(e);
    }

  };
}
