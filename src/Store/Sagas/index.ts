import {all} from 'redux-saga/effects';
import SearchSaga from './search.saga';
import AcceptSearchFromSaga from './search-form.saga';
import ChangeLanguage from './change-language.saga';
import GetHotels from './get-hotels.saga';
import ApplyHotelsFilters from './apply-hotels-filter.saga';
import UpdateSearch from './update-search-to-current.saga';

function* appSaga() {
  yield all([
    ...SearchSaga,
    AcceptSearchFromSaga,
    ...GetHotels,
    ApplyHotelsFilters,
    ChangeLanguage,
    UpdateSearch,
  ]);
}


export default appSaga;
