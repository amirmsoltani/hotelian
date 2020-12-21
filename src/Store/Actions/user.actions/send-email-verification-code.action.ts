import {Dispatch} from 'redux';
import Http from 'Lib/Http';
import {SEND_EMAIL_VERIFICATION_CODE_URL} from 'URLS';
import {setStatus, SetStatusType} from '../global.actions/set-status.action';
import {AppErrorType} from '../app.actions';
import {UserErrorType} from './user-error.action';
import {error_handler} from 'Lib/error-handler';
import {ToastAndroid} from 'react-native';
import {translate} from '../../../Lib/Languages';
import {RootStateInterface} from '../../../Typescript/Interfaces';

export const SEND_EMAIL_VERIFICATION_CODE = '[User Reducer] Send Email Verification Code';
export type SendEmailVerificationCodeType = {type: typeof SEND_EMAIL_VERIFICATION_CODE};
type ActionType = SendEmailVerificationCodeType | SetStatusType | AppErrorType | UserErrorType

export const sendEmailVerificationCode = () => async (dispatch: Dispatch<ActionType>, getState: () => RootStateInterface) => {
    dispatch(setStatus('user_verify_email', 'loading'));
    try {
      await Http.request({url: SEND_EMAIL_VERIFICATION_CODE_URL, method: 'POST'});
      const email = getState().userReducer.user!.email;
      ToastAndroid.show(translate('An email containing the verification code was sent to Email') + ' ' + email, 1);
      dispatch({type: SEND_EMAIL_VERIFICATION_CODE});
    } catch (e) {
      dispatch(setStatus('user_verify_email', undefined));
      dispatch(await error_handler({
        error: e,
        action: {type: SEND_EMAIL_VERIFICATION_CODE},
        canClose: true,
      }) as AppErrorType);
    }
  }
;
