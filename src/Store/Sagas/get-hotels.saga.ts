import {cancel, fork, delay, takeLatest, put, select, call} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import Http from '../../Lib/Http';
import {SET_SEARCH_ID, SetSearchIdType} from '../Actions';
import {
  HotelsResultInterface,
  HttpResponseInterface,
  RootStateInterface,
  SearchFormDataInterface,
} from '../../Typescript';
import {HOTEL_SEARCH_RESULT_URL} from '../../URLS';
import {GET_HOTELS, SetHotels} from 'src/Store/Actions/hotels.actions';

export function* GetHotels(action: SetSearchIdType) {

  try {
    const url = HOTEL_SEARCH_RESULT_URL + `?search_id=${action.payload}`;
    const response: HttpResponseInterface<HotelsResultInterface> = yield Http.request({url: url, method: 'GET'});
    const {hotels,expire,facilities,search_details} = response.data.result;
      yield put(SetHotels({search_id: action.payload,expire:}));


  } catch (e) {
    yield cancel(loader);
    console.log(e);
    // TODO add error handler after create

  }
}

export default [takeLatest(SET_SEARCH_ID, GetHotels), takeLatest(GET_HOTELS, GetHotels)];

