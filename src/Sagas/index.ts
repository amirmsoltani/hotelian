import {all} from 'redux-saga/effects';
import SearchSaga from './SearchSaga';

function* appSaga() {
  yield all([
    ...SearchSaga,
  ]);
}


export default appSaga;
