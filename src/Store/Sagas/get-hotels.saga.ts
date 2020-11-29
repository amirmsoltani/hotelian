import {takeLatest, put, select} from 'redux-saga/effects';
import Http from 'Lib/Http';
import {SetSearchIdType, SetHotels, GET_HOTELS} from '../Actions';
import {
  HotelsResultInterface,
  HttpResponseInterface,
} from 'Typescript';
import {HOTEL_SEARCH_RESULT_URL} from 'URLS';
import {HotelsInitial} from 'Lib/FilterTool';

export function* GetHotels(action: SetSearchIdType) {
  try {
    const url = HOTEL_SEARCH_RESULT_URL + `?search_id=${typeof action.payload === 'string' ? action.payload : action.payload.search_id}`;
    const response: HttpResponseInterface<HotelsResultInterface> = yield Http.request({url: url, method: 'GET'});
    const {hotels, expire, facilities, search_details} = response.data.result;
    const structureCreator = yield  new HotelsInitial(hotels);
    yield structureCreator.initial();
    yield put(SetHotels({
      status: 'ok',
      basicData: {hotels, facilities, expire, search_details, search_id: action.payload.search_id},
      filter: {
        structure: structureCreator.structure,
        hotels: structureCreator.hotelsIndex,
        sortBy: 'priceDown',
        actives: {priceDown: {name: 'sort', indexes: structureCreator.sorting.priceDown}},
      },
    }));
  } catch (e) {
    // TODO after create expire put expire
    console.log(e.response);
    // TODO add error handler after create

  }
}

export default [takeLatest(GET_HOTELS, GetHotels)];

