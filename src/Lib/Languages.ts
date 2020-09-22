import {I18nManager} from 'react-native';
import memoize from 'lodash.memoize';
import i18n from 'i18n-js';

export const translate = memoize(
  (key, config?) => i18n.t(key, config),
  (key, config?) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = (lang: string, rtl: boolean, json: {[key: string]: string}) => {

  if (translate.cache.clear)
    translate.cache.clear();
  I18nManager.forceRTL(rtl);
  i18n.translations = {[lang]: json};
  i18n.locale = lang;
};

export default setI18nConfig;
