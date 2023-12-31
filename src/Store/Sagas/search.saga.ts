import {delay, takeLatest, put} from 'redux-saga/effects';
import Http from 'Lib/Http';
import {GET_DESTINATION, GET_NATIONALITY, GetDestinationType, GetNationalityType, SetSearchResponse} from '../Actions';
import {HttpResponseInterface} from 'Typescript';
import {autoCompleteError} from '../Actions/search.actions/auto-complete-error.action';

export function* GetSearchData(action: GetDestinationType | GetNationalityType) {

  if (action.debounce)
    {yield delay(action.debounce);}
  try {
    const response: HttpResponseInterface<typeof action.response> = yield Http.request({
      url: action.url,
      method: action.method,
    });
    action.response = response.data.result;
    yield put(SetSearchResponse(action));
  } catch (e) {
    yield put(autoCompleteError(action.target));
  }
}

export default [
  takeLatest(GET_DESTINATION, GetSearchData),
  takeLatest(GET_NATIONALITY, GetSearchData),
];
