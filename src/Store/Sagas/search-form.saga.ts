import {cancel, fork, delay, takeLatest, put, select, call} from 'redux-saga/effects';
import Http from 'Lib/Http';
import {ACCEPT_SEARCH_FORM, SearchExpire, SetSearchId} from '../Actions';
import {HttpResponseInterface, RootStateInterface, SearchFormDataInterface} from 'Typescript';
import {HOTEL_SEARCH_URL} from 'URLS';
import {commonActions} from 'Lib/navigation';
import {GetHotels} from '../Actions';
import {error_handler} from 'Lib/error-handler';

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
    if (searchData.dest_type === 'hotel') {
      yield commonActions.navigate('hotel', 'hotel', {
        checkin: searchFormData.checkIn!.formatted,
        checkout: searchFormData.checkOut!.formatted,
        id: searchData.dest_code,
        name: searchFormData.destination!.label!,
      });
    } else {
      yield commonActions.navigate('hotels', 'hotels');
    }
  });
  try {
    const response: HttpResponseInterface<{search_id: string, expire: number}> = yield Http.request({
      url: HOTEL_SEARCH_URL,
      data: searchData,
      method: 'POST',
    });
    yield put(SetSearchId(response.data.result.search_id, response.data.result.expire));
    if (searchData.dest_type === 'city') {
      yield put(GetHotels(response.data.result.search_id));
    }
    let now = Math.floor(new Date().getTime() / 1000);
    while (response.data.result.expire > now++) {
      yield delay(1000);
    }
    yield put(SearchExpire());
  } catch (e) {
    yield cancel(loader);
    yield put(yield call(error_handler, e));
  }
}

export default takeLatest(ACCEPT_SEARCH_FORM, AcceptSearchFrom);

