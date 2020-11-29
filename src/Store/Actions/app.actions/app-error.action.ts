import {AppErrorInterface} from 'Typescript/Interfaces';
import {APP_ERROR, AppErrorType} from './app-actions.types';

export const AppError = ({button, close = true, code, messages}: AppErrorInterface): AppErrorType => {
  return {payload: {button, close, messages, code}, type: APP_ERROR};
};
