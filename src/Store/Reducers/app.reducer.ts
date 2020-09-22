import {AppStateInterface} from '../../Typescript';
import Storage from '../../Lib/Storage';
import axios from 'axios';
import {INITIAL_URL, LANGUAGE_URL, USER_TRACK_CODE_URL} from '../../URLS';
import {AppActionsTypes, SET_LANGUAGE} from '../Actions';

const defaultData: AppStateInterface = {
  today: {unix: 0, datetime: ''},
  track_code: '',
  language: 'en',
  rtl: false,
  currency: 'USD',
  locales: [],
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
    }
  }

  try {
    const response = await axios.get<{
      result: {
        locales: Array<{dir: 'rtl' | 'ltr', lang: string}>;
        today: {unix: number, datetime: string};
      };
    }>(INITIAL_URL);
    defaultData.locales = response.data.result.locales;
    defaultData.today = response.data.result.today;
    defaultData.json = (await axios.get(LANGUAGE_URL + defaultData.language)).data.result;
  } catch (e) {
  }
  return defaultData;
};
const AppReducer = (state: AppStateInterface = defaultData, action: AppActionsTypes): AppStateInterface => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {...state, rtl: action.payload.rtl, json: action.payload.json, language: action.payload.lang};
    }
    default:
      return state;
  }
};

export default AppReducer;
