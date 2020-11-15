import {cancel, fork, delay, takeLatest, put, select} from 'redux-saga/effects';
import Http from '../../Lib/Http';
import {ACCEPT_SEARCH_FORM, SetSearchId} from '../Actions';
import {HttpResponseInterface, RootStateInterface, SearchFormDataInterface} from '../../Typescript';
import {HOTEL_SEARCH_URL} from '../../URLS';
import {commonActions} from 'Lib/navigation';

export function* AcceptSearchFrom() {
  const searchFormData: SearchFormDataInterface = yield select((state: RootStateInterface) => state.searchReducer.form_data);
  const searchData = {
    nationality: searchFormData.nationality?.code,
    dest_type: searchFormData.destination?.dest_type,
    dest_code: searchFormData.destination?.dest_code,
    checkin: searchFormData.checkIn?.value,
    checkout: searchFormData.checkOut?.value,
    rooms: searchFormData.rooms,
  };
  const loader = yield fork(function* () {
    yield delay(1000);
    yield commonActions.navigate('hotels', 'hotels');
  });
  try {
    const response: HttpResponseInterface<{search_id: string}> = yield Http.request({
      url: HOTEL_SEARCH_URL,
      data: searchData,
      method: 'POST',
    });
    yield put(SetSearchId(response.data.result.search_id));
  } catch (e) {
    yield cancel(loader);
    console.log(e.response);
    // TODO add error handler after create
  }
}

export default takeLatest(ACCEPT_SEARCH_FORM, AcceptSearchFrom);

