import {SET_LANGUAGE, SetLanguageType} from './app-actions.types';

export function SetLanguage(payload: {json: {[key: string]: string}, lang: string, rtl: boolean}): SetLanguageType {
  return {type: SET_LANGUAGE, payload};
}
