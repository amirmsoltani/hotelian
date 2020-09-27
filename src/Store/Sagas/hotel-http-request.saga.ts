import {put, takeEvery} from 'redux-saga/effects';
import {GET_HOTEL, GetHotelType, SetHotelData} from 'Store/Actions';
import Http from 'Lib/Http';
import {HttpResponseInterface} from 'Typescript';

function* HotelHttpRequest(action: GetHotelType) {
  try {
    const response: HttpResponseInterface<typeof action.response> = yield Http.request({
      url: action.url,
      method: action.method,
    });
    yield put(SetHotelData(action, response.data.result));
  } catch (e) {
    console.log(e.response);
  }
}


export default takeEvery(GET_HOTEL, HotelHttpRequest);
