export const CHANGE_LANGUAGE = '[App Reducer] Change Language';
export type ChangeLanguageType = {
  readonly type: typeof CHANGE_LANGUAGE;
  payload: {lang: string, rtl: boolean};
}

export const CHANGE_CURRENCY = '[App Reducer] Change Currency';
export type ChangeCurrencyType = {
  readonly type: typeof CHANGE_CURRENCY;
  payload: string;
}

export const SET_LANGUAGE = '[App Reducer] Set Language';
export type SetLanguageType = {
  readonly type: typeof SET_LANGUAGE;
  payload: {json: {[key: string]: string}, lang: string, rtl: boolean};
}


export type AppActionsTypes = SetLanguageType | ChangeLanguageType | ChangeCurrencyType;
