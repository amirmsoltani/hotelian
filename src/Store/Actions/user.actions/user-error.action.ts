import {ErrorMessageType} from '../../../Typescript/Types';
import {USER_LOGIN} from './login.action';

export const USER_ERROR = '[User Reducer] User Error';

type types = typeof USER_LOGIN;

export type UserErrorType = {type: typeof USER_ERROR, payload: {status: number, message: ErrorMessageType}, target: types}
export const userError = (status: number, message: ErrorMessageType, target: string): UserErrorType => {
  return {type: USER_ERROR, target: target as types, payload: {status, message}};
};
