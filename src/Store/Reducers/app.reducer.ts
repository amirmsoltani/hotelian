import {AppStateInterface} from '../../Typescript';
import Storage from '../../Lib/Storage';
import axios from 'axios';
import {USER_TRACK_CODE_URL, INITIAL_URL, LANGUAGE_URL} from '../../URLS';

const defaultData: AppStateInterface = {
  today: {unix: 0, datetime: ''},
  track_code: '',
  language: 'fa',
  rtl: true,
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
      Storage.save({key: 'app-data', data: defaultData, expires: null}).then();
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
const AppReducer = (state: AppStateInterface = defaultData, action: any): AppStateInterface => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AppReducer;
