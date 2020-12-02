import {AppStateInterface} from 'Typescript';
import Storage from 'Lib/Storage';
import axios from 'axios';
import {
  INITIAL_URL,
  INTERNET_CONNECTION_ERROR,
  LANGUAGE_URL,
  USER_INITIAL_ERROR_MESSAGE,
  USER_TRACK_CODE_URL,
} from 'URLS';
import {APP_CLEAR_ERROR, APP_ERROR, AppActionsTypes, CHANGE_CURRENCY, SET_LANGUAGE} from '../Actions';
import {except} from 'object-tool';

const defaultData: AppStateInterface = {
  today: {unix: 0, datetime: ''},
  track_code: '',
  language: 'en',
  rtl: false,
  currency: 'USD',
  locales: [],
  currencies: [],
  status: 'ok',
};
export const appInit = async (): Promise<AppStateInterface> => {
  try {
    const result = await Storage.load({key: 'app-data'});
    defaultData.currency = result.currency;
    defaultData.language = result.language;
    defaultData.track_code = result.track_code;
    defaultData.rtl = result.rtl;
  } catch (e) {
    try {
      const response = await axios.get<{result: {user_track_code: string}}>(USER_TRACK_CODE_URL);
      defaultData.track_code = response.data.result.user_track_code;
      const {rtl, language, track_code, currency} = defaultData;
      Storage.save({key: 'app-data', data: {rtl, language, track_code, currency}, expires: null}).then();
    } catch (e) {
      defaultData.status = 'error';
      if (e.isAxiosError && e.message === 'Network Error') {
        defaultData.message = INTERNET_CONNECTION_ERROR + '\n' + JSON.stringify(e.toJSON());
      } else {
        defaultData.message = USER_INITIAL_ERROR_MESSAGE;
      }
    }
  }

  try {
    const response = await axios.get<{
      result: {
        locales: Array<{dir: 'rtl' | 'ltr', lang: string, label: string}>;
        currencies: Array<{code: string, label: string}>;
        today: {unix: number, datetime: string};
        date_format: string;
      };
    }>(INITIAL_URL);
    defaultData.locales = response.data.result.locales;
    defaultData.currencies = response.data.result.currencies;
    defaultData.today = response.data.result.today;
    defaultData.json = (await axios.get(LANGUAGE_URL + defaultData.language)).data.result;
  } catch (e) {
    defaultData.status = 'error';
    if (e.isAxiosError && e.message === 'Network Error') {
      defaultData.message = INTERNET_CONNECTION_ERROR + '\n' + JSON.stringify(e.toJSON());
    } else {
      defaultData.message = USER_INITIAL_ERROR_MESSAGE;
    }
  }
  return defaultData;
};
const AppReducer = (state: AppStateInterface = defaultData, action: AppActionsTypes): AppStateInterface => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {...state, rtl: action.payload.rtl, json: action.payload.json, language: action.payload.lang};
    }
    case CHANGE_CURRENCY: {
      return {...state, currency: action.payload};
    }
    case APP_ERROR: {
      return {...state, errors: action.payload};
    }
    case APP_CLEAR_ERROR: {
      return except(state, 'errors');
    }
    default:
      return state;
  }
};

export default AppReducer;
