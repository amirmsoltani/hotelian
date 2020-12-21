import {Dispatch} from 'redux';
import Http from 'Lib/Http';
import {VERIFY_EMAIL_BY_CODE_URL} from 'URLS';
import {setStatus, SetStatusType} from '../global.actions/set-status.action';
import {AppErrorType} from '../app.actions';
import {UserErrorType} from './user-error.action';
import {error_handler} from '../../../Lib/error-handler';

export const VERIFY_EMAIL_BY_CODE = '[User Reducer] Verify Email By Code';
export type verifyEmailByCodeType = {type: typeof VERIFY_EMAIL_BY_CODE};
type ActionType = verifyEmailByCodeType | SetStatusType | AppErrorType | UserErrorType

export const verifyEmailByCode = (code: string) => async (dispatch: Dispatch<ActionType>) => {
  dispatch(setStatus('user_verify_email', 'loading'));
  try {
    await Http.request({url: VERIFY_EMAIL_BY_CODE_URL, data: {verifyCode: code}, method: 'POST'});
    dispatch({type: VERIFY_EMAIL_BY_CODE});
  } catch (e) {
    dispatch(setStatus('user_verify_email', undefined));
    dispatch(await error_handler({error: e, action: {type: VERIFY_EMAIL_BY_CODE}, canClose: true}) as AppErrorType);
  }
};
