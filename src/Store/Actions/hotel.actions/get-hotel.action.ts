import {HOTEL_DETAILS} from 'URLS';
import Http from 'Lib/Http';
import {Dispatch} from 'redux';
import {SetHotelData} from './set-hotel-data.action';
import {error_handler} from '../../../Lib/error-handler';
import {setStatus} from '../global.actions/set-status.action';
import {GET_HOTEL} from './hotel-actions.type';

export function GetHotel(id: number) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setStatus('hotel', 'loading'));
      const response = await Http.request({
        method: 'GET',
        url: `${HOTEL_DETAILS}?hotel_id=${id}`,
      });
      dispatch(SetHotelData(response.data.result));
    } catch (e) {
      dispatch(await error_handler({error: e, action: {type: '', id}}));
    }

  };
}
