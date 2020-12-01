import {APP_CLEAR_ERROR, AppClearErrorType} from './app-actions.types';

export const AppClearError = (): AppClearErrorType => {
  return {type: APP_CLEAR_ERROR};
};
