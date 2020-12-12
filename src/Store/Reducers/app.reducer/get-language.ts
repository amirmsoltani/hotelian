import axios from 'axios';
import {INTERNET_CONNECTION_ERROR, LANGUAGE_URL, USER_INITIAL_ERROR_MESSAGE} from 'URLS';
import storage from 'Lib/Storage';
import {AppStateInterface} from 'Typescript/Interfaces';

export const get_language = async (defaultData: AppStateInterface) => {
  if (defaultData.status !== 'ok' || !defaultData.lang_version) {
    return;
  }
  try {
    const lang_map =
      await storage.load<{version: string, json: {[key: string]: string}}>({key: 'lang-map'});
    if (lang_map.version !== defaultData.lang_version) {
      throw 'version';
    }
    defaultData.json = lang_map.json;
  } catch (_) {
    try {
      const response = await axios.get(LANGUAGE_URL + defaultData.language);
      await storage.save({key: 'lang-map', data: {version: defaultData.lang_version, json: response.data.result}});
      defaultData.json = response.data.result;
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
