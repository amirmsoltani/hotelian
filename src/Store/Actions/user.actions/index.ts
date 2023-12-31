export * from './user-error.action';
export * from './login.action';


import {UserLoginType} from './login.action';
import {verifyEmailByCodeType} from './verify-email-by-code.action';
import {UserErrorType} from './user-error.action';
import {SetStatusType} from '../global.actions/set-status.action';

export type UserActionsType = SetStatusType | UserErrorType | UserLoginType | verifyEmailByCodeType;
