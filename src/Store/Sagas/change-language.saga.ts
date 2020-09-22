import {put, takeLatest, call, select} from 'redux-saga/effects';
import {CHANGE_LANGUAGE, ChangeLanguageType, SetLanguage} from '../Actions';
import axios, {AxiosResponse} from 'axios';
import {LANGUAGE_URL} from '../../URLS';
import Storage from '../../Lib/Storage';
import {RootStateInterface} from '../../Typescript';

function* ChangeLanguage({payload: {rtl, lang}}: ChangeLanguageType) {
  try {
    const response: AxiosResponse<{result: {[key: string]: string}}> = yield call(axios.get, LANGUAGE_URL + lang);
    const {track_code, currency} = yield select((state: RootStateInterface) => ({
      track_code: state.appReducer.track_code,
      currency: state.appReducer.currency,
    }));
    yield Storage.save({key: 'app-data', expires: null, data: {track_code, currency, rtl, lang}});
    yield put(SetLanguage({lang, rtl, json: response.data.result}));
  } catch (e) {

  }
}

export default takeLatest(CHANGE_LANGUAGE, ChangeLanguage);
