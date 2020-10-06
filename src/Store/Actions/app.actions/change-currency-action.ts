import {CHANGE_CURRENCY, ChangeCurrencyType} from './app-actions.types';

export const ChangeCurrency = (currencyCode: string): ChangeCurrencyType => {
  return {
    type: CHANGE_CURRENCY,
    payload: currencyCode,
  };
};
