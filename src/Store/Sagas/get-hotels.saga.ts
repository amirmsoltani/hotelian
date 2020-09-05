import {cancel, fork, delay, takeLatest, put, select, call} from 'redux-saga/effects';
import {push} from 'connected-react-router';
import Http from '../../Lib/Http';
import {SET_SEARCH_ID, SetSearchIdType, GET_HOTELS} from '../Actions';
import {
  HotelsResultInterface,
  HttpResponseInterface,
} from '../../Typescript';
import {HOTEL_SEARCH_RESULT_URL} from '../../URLS';
import {HotelsInitial} from '../../Lib/FilterTool';

export function* GetHotels(action: SetSearchIdType) {

  try {
    const url = HOTEL_SEARCH_RESULT_URL + `?search_id=${action.payload}`;
    const response: HttpResponseInterface<HotelsResultInterface> = yield Http.request({url: url, method: 'GET'});
    const {hotels, expire, facilities, search_details} = response.data.result;
    const structureCreator = yield  new HotelsInitial(hotels);
    yield structureCreator.initial();
    console.log(structureCreator.structure, hotels);
    //yield put(SetHotels({search_id: action.payload,expire:}));


  } catch (e) {
    console.log(e.response);
    // TODO add error handler after create

  }
}

export default [takeLatest(SET_SEARCH_ID, GetHotels), takeLatest(GET_HOTELS, GetHotels)];

