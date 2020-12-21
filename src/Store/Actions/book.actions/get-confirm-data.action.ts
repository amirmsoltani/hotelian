import {Dispatch} from 'redux';
import {RootStateInterface} from 'Typescript/Interfaces';
import Http from 'Lib/Http';
import {GET_PASSENGERS} from 'URLS';
import {error_handler} from '../../../Lib/error-handler';

// type ActionTypes =

export const getConfirmData = () => async (dispatch: Dispatch, getState: () => RootStateInterface) => {
  const state = getState();
  const {
    searchReducer: {search_id},
    hotelReducer: {hotel: {result}},
    bookReducer: {passenger},
  } = state;

  try {
    const response = Http.request({
      url: GET_PASSENGERS, method: 'POST', data: {
        search_id,
        hotel_id: result!.hotel.id,
        reserve_id: passenger!.reserve_id,
        option_id: passenger!.option_id,
      },
    });
  } catch (e) {
    dispatch(await error_handler({error: e, action: {type: ''}}));
  }

};
