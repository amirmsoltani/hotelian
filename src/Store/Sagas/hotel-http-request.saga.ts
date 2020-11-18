import {put, takeEvery} from 'redux-saga/effects';
import {GET_HOTEL, GetHotelType, SetHotelData} from 'Store/Actions';
import Http from 'Lib/Http';
import {HttpResponseInterface, HotelDetailsInterface} from 'Typescript';

function* HotelHttpRequestSaga(action: GetHotelType) {
  try {
    const response: HttpResponseInterface<HotelDetailsInterface> = yield Http.request({
      url: action.url,
      method: 'GET',
    });
    yield put(SetHotelData(response.data.result));
  } catch (e) {
    console.log(e.response);
  }
}


export default [takeEvery(GET_HOTEL, HotelHttpRequestSaga)];
