import {AppErrorInterface} from 'Typescript/Interfaces';
import {APP_ERROR, AppErrorType} from './app-actions.types';
import {ErrorMessageType} from '../../../Typescript/Types';
import {map} from 'object-tool';

export const AppError = ({messages, ...all}: AppErrorInterface): AppErrorType => {
  let message: ErrorMessageType;
  if (typeof messages === 'string') {
    message = messages;
  } else if (Array.isArray(messages)) {
    message = messages.map(mes => Array.isArray(mes) ? mes.join('\n') : mes);
  } else {
    message = map(messages, (key, value) => ({key: key, value: Array.isArray(value) ? value.join('\n') : value}));
  }
  return {payload: {...all, messages: message}, type: APP_ERROR};
};
