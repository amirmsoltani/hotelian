import {all} from 'redux-saga/effects';
import SearchSaga from './search.saga';
import AcceptSearchFromSaga from './search-form.saga';
import ChangeLanguage from './change-language.saga';
import GetHotels from './get-hotels.saga';
import HotelHttpRequest from './hotel-http-request.saga';

function* appSaga() {
  yield all([
    ...SearchSaga,
    AcceptSearchFromSaga,
    ...GetHotels,
    ChangeLanguage,
    ...HotelHttpRequest,
  ]);
}


export default appSaga;
