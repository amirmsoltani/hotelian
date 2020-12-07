import {put, takeLatest, call, select} from 'redux-saga/effects';
import {CHANGE_LANGUAGE, ChangeLanguageType, SetLanguage} from '../Actions';
import axios, {AxiosResponse} from 'axios';
import {LANGUAGE_URL} from 'URLS';
import Storage from 'Lib/Storage';
import {RootStateInterface} from 'Typescript';
import Translator from 'Lib/Languages';
import RNRestart from 'react-native-restart';
import {error_handler} from '../../Lib/error-handler';

function* ChangeLanguage({payload: {rtl, lang}}: ChangeLanguageType) {
  try {
    const response: AxiosResponse<{result: {[key: string]: string}}> = yield call(axios.get, LANGUAGE_URL + lang);
    const {track_code, currency} = yield select((state: RootStateInterface) => ({
      track_code: state.appReducer.track_code,
      currency: state.appReducer.currency,
    }));
    yield Storage.save({key: 'app-data', expires: null, data: {track_code, currency, rtl, language: lang}});
    Translator(lang, rtl, response.data.result);
    yield put(SetLanguage({lang, rtl, json: response.data.result}));
    RNRestart.Restart();
  } catch (e) {
    yield put(yield error_handler(e,true));
  }
}

export default takeLatest(CHANGE_LANGUAGE, ChangeLanguage);
