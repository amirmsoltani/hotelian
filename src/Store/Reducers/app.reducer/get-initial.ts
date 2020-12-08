import {AppStateInterface} from 'Typescript/Interfaces';
import axios from 'axios';
import {INITIAL_URL, INTERNET_CONNECTION_ERROR, USER_INITIAL_ERROR_MESSAGE} from 'URLS';

export const get_initial = async (defaultData: AppStateInterface) => {
  if (defaultData.status !== 'ok')
    {return '';}
  try {
    const response = await axios.get<{
      result: {
        locales: Array<{dir: 'rtl' | 'ltr', lang: string, label: string}>;
        currencies: Array<{code: string, label: string}>;
        today: {unix: number, datetime: string};
        date_format: string;
        app_version: string;
        lang_version: string;
      };
    }>(INITIAL_URL);
    defaultData.locales = response.data.result.locales;
    defaultData.currencies = response.data.result.currencies;
    defaultData.today = response.data.result.today;
    if (!defaultData.lang_version) {
      defaultData.lang_version = response.data.result.lang_version;
    }
  } catch (e) {
    defaultData.status = 'error';
    if (e.isAxiosError && e.message === 'Network Error') {
      defaultData.message = INTERNET_CONNECTION_ERROR + '\n' + JSON.stringify(e.toJSON());
    } else {
      defaultData.message = USER_INITIAL_ERROR_MESSAGE;
    }
  }
};
