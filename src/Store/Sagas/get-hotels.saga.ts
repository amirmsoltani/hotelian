import {delay, takeLatest, put} from 'redux-saga/effects';
import {push, replace} from 'connected-react-router';
import Http from '../../Lib/Http';
import {SET_SEARCH_ID, SetSearchIdType, SetHotels, GET_HOTELS, SearchExpire} from '../Actions';
import {
  HotelsResultInterface,
  HttpResponseInterface,
} from '../../Typescript';
import {HOTEL_SEARCH_RESULT_URL} from '../../URLS';
import {HotelsInitial} from '../../Lib/FilterTool';
import Storage from '../../Lib/Storage';

export function* GetHotels(action: SetSearchIdType) {

  try {
    const url = HOTEL_SEARCH_RESULT_URL + `?search_id=${action.payload}`;
    const response: HttpResponseInterface<HotelsResultInterface> = yield Http.request({url: url, method: 'GET'});
    const {hotels, expire, facilities, search_details} = response.data.result;
    const structureCreator = yield  new HotelsInitial(hotels);
    yield structureCreator.initial();
    yield put(SetHotels({
      status: 'ok',
      basicData: {hotels, facilities, expire, search_details, search_id: action.payload},
      filter: {structure: structureCreator.structure,  hotels: structureCreator.hotelsIndex},
    }));
    const expireTime = Math.floor(expire - new Date().getTime() / 1000) * 1000;
    yield Storage.save({key: 'search-id', data: action.payload, expires: expireTime});
    yield put(push({pathname: '/hotels'}));
    yield delay(expireTime);
    yield put(SearchExpire());
  } catch (e) {
    yield put(replace({pathname: '/'}));
    console.log(e.response);
    // TODO add error handler after create

  }
}

export default [takeLatest(SET_SEARCH_ID, GetHotels), takeLatest(GET_HOTELS, GetHotels)];

