import {CHANGE_LANGUAGE, ChangeLanguageType} from './app-actions.types';

export function ChangeLanguage({lang, dir}: {lang: string, dir: string}): ChangeLanguageType {
  return {
    type: CHANGE_LANGUAGE,
    payload: {lang, rtl: dir === 'rtl'},
  };
}
