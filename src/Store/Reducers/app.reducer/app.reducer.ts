import {AppStateInterface} from 'Typescript';
import {
  APP_V,
} from 'URLS';
import {APP_CLEAR_ERROR, APP_ERROR, AppActionsTypes, CHANGE_CURRENCY, SET_LANGUAGE} from '../../Actions';
import {except} from 'object-tool';
import {get_language} from './get-language';
import {get_initial} from './get-initial';
import {get_user_track_code} from './get-user-track-code';

const defaultData: AppStateInterface = {
  today: {unix: 0, datetime: ''},
  track_code: '',
  language: 'en',
  rtl: false,
  currency: 'USD',
  locales: [],
  currencies: [],
  status: 'ok',
  app_version: APP_V,
};
export const appInit = async (): Promise<AppStateInterface> => {
  await get_user_track_code(defaultData);
  await get_initial(defaultData);
  await get_language(defaultData);
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
