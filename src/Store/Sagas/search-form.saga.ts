import {cancel, fork, delay, takeLatest, put, select, call} from 'redux-saga/effects';
import Http from 'Lib/Http';
import {ACCEPT_SEARCH_FORM, AcceptSearchFormType, SearchExpire, SetSearchId} from '../Actions';
import {HttpResponseInterface, RootStateInterface, SearchFormDataInterface} from 'Typescript';
import {HOTEL_SEARCH_URL} from 'URLS';
import {stackActions} from 'Lib/navigation';
import {GetHotels} from '../Actions';
import {error_handler} from 'Lib/error-handler';
import {NativeModules} from 'react-native';

let exists = false;

export function* AcceptSearchFrom(action: AcceptSearchFormType & {'@@redux-saga/SAGA_ACTION': boolean}) {
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
    if (searchData.dest_type === 'hotel' && !action['@@redux-saga/SAGA_ACTION']) {
      yield stackActions.push('hotel', {
        params: {
          checkin: searchFormData.checkIn!.formatted,
          checkout: searchFormData.checkOut!.formatted,
          id: searchData.dest_code,
          name: searchFormData.destination!.label!,
        },
        screen: 'hotel',
      });
    } else if (!action['@@redux-saga/SAGA_ACTION']) {
      yield stackActions.push('hotels', {screen: 'hotels'});
    }
  });
  try {
    const response: HttpResponseInterface<{search_id: string, expire: number}> = yield Http.request({
      url: HOTEL_SEARCH_URL,
      data: searchData,
      method: 'POST',
    });
    response.data.result.expire = Math.floor(new Date().getTime() / 1000 + 60);
    yield put(SetSearchId(response.data.result.search_id, response.data.result.expire));
    if (searchData.dest_type === 'city') {
      yield put(GetHotels(response.data.result.search_id));
    }
    let now = new Date().getTime() / 1000;
    if (!exists) {
      NativeModules.Timer.intervalEvent('sec', 1000);
      exists = true;
    }
    while (response.data.result.expire > now) {
      yield delay(5000);
      now = new Date().getTime() / 1000;
    }
    NativeModules.Timer.clearInterval('sec');
    exists = false;
    yield put(SearchExpire());
  } catch (e) {
    yield cancel(loader);
    yield put(yield call(error_handler, {error: e, canClose: false}));
  }
}

export default takeLatest(ACCEPT_SEARCH_FORM, AcceptSearchFrom);

