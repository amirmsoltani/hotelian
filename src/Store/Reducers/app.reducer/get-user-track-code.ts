import {AppStateInterface} from 'Typescript/Interfaces';
import Storage from 'Lib/Storage';
import axios from 'axios';
import {INTERNET_CONNECTION_ERROR, USER_INITIAL_ERROR_MESSAGE, USER_TRACK_CODE_URL} from 'URLS';

export const get_user_track_code = async (defaultData: AppStateInterface) => {

  try {
    const result = await Storage.load({key: 'app-data'});
    defaultData.currency = result.currency;
    defaultData.language = result.language;
    defaultData.track_code = result.track_code;
    defaultData.rtl = result.rtl;
    defaultData.lang_version = result.lang_version;
  } catch (_) {
    try {
      const response = await axios.get<{result: {user_track_code: string}}>(USER_TRACK_CODE_URL);
      defaultData.track_code = response.data.result.user_track_code;
      const {rtl, language, track_code, currency} = defaultData;
      Storage.save({key: 'app-data', data: {rtl, language, track_code, currency}, expires: null}).then();
    } catch (e) {
      defaultData.status = 'error';
      if (e.isAxiosError && e.message === 'Network Error') {
        defaultData.message = INTERNET_CONNECTION_ERROR;
      } else {
        defaultData.message = USER_INITIAL_ERROR_MESSAGE;
      }
    }
  }
};
