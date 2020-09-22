import {all} from 'redux-saga/effects';
import SearchSaga from './search.saga';
import AcceptSearchFromSaga from './search-form.saga';
import GetHotels from './get-hotels.saga';
import ChangeLanguage from './change-language.saga';

function* appSaga() {
  yield all([
    ...SearchSaga,
    AcceptSearchFromSaga,
    ...GetHotels,
    ChangeLanguage,
  ]);
}


export default appSaga;
