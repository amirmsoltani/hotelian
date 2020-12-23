import {Dispatch} from 'redux';
import {RootStateInterface} from 'Typescript/Interfaces';
import Http from 'Lib/Http';
import {GET_PASSENGERS} from 'URLS';
import {error_handler} from '../../../Lib/error-handler';
import {AxiosError} from 'axios';
import {GET_CONFIRM_DATA, GetConfirmDataType} from './book-actions.type';
import {setStatus, SetStatusType} from '../global.actions/set-status.action';
import {AppErrorType} from '../app.actions';

type ActionTypes = SetStatusType | GetConfirmDataType | AppErrorType

export const getConfirmData = () => async (dispatch: Dispatch<ActionTypes>, getState: () => RootStateInterface) => {
  const state = getState();
  const {
    searchReducer: {search_id},
    hotelReducer: {hotel: {result}},
    bookReducer: {passenger},
  } = state;
  dispatch(setStatus(GET_CONFIRM_DATA, 'loading'));
  try {
    const response = await Http.request({
      url: GET_PASSENGERS, method: 'POST', data: {
        search_id,
        hotel_id: result!.hotel.id,
        reserve_id: passenger!.reserve_id,
        option_id: passenger!.option_id,
      },
    });
    const {confirm, user, gateways} = response.data.result;
    if ([confirm.ok, user.ok].includes(false)) {
      const message = confirm.result.message || user.result.message;
      const code = confirm.result.status || user.result.status || 500;
      dispatch(await error_handler({
        error: {
          response: {data: {result: {message: message}}},
          isAxiosError: true,
          code,
        } as AxiosError, action: {type: GET_CONFIRM_DATA},
      }) as AppErrorType);
      return;
    }
    dispatch({
      type: GET_CONFIRM_DATA,
      payload: {gateways: gateways, user: user.result, invoice: confirm.result.invoice},
    });
  } catch (e) {
    dispatch(await error_handler({error: e, action: {type: GET_CONFIRM_DATA}}) as AppErrorType);
  }

};
