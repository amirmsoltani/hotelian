import {HOTEL_DETAILS} from 'URLS';
import Http from 'Lib/Http';
import {Dispatch} from 'redux';
import {SetHotelData} from './set-hotel-data.action';
import {error_handler} from '../../../Lib/error-handler';

export function GetHotel(id: number) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await Http.request({
        method: 'GET',
        url: `${HOTEL_DETAILS}?hotel_id=${id}`,
      });
      dispatch(SetHotelData(response.data.result));
    } catch (e) {
      dispatch(await error_handler(e));
    }

  };
}
