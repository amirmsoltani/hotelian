import {Dispatch} from 'redux';
import Http from '../../../Lib/Http';
import {getMacId} from 'Lib/get-mac-id';
import {userType, HttpResultInterface} from 'Typescript';
import {setStatus, SetStatusType} from '../global.actions/set-status.action';
import {error_handler} from '../../../Lib/error-handler';
import {AppErrorType} from '../app.actions';
import {userError, UserErrorType} from './user-error.action';
import {commonActions} from '../../../Lib/navigation';
import {LOGIN_URL} from '../../../URLS';
import storage from '../../../Lib/Storage';

export const USER_LOGIN = '[User Reducer] User Login';
export type UserLoginType = {type: typeof USER_LOGIN, payload: {user: userType, user_token: string}};
type actionsType = UserLoginType | SetStatusType | AppErrorType | UserErrorType;


export const userLogin = (email: string, password: string) => async (dispatch: Dispatch<actionsType>) => {
  dispatch(setStatus('user', 'loading'));
  try {
    const fp = await getMacId();
    const {data: {result: {user_token, user}}} = await Http.request<HttpResultInterface<{user: userType, user_token: string}>>({
      data: {
        email,
        password,
        fp,
      },
      method: 'POST',
      url: LOGIN_URL,
    });
    commonActions.goBack();
    await storage.save({key:'user-data',data:{user_token,user}});
    dispatch({type: USER_LOGIN, payload: {user, user_token}});
  } catch (e) {
    dispatch(await error_handler({
      error: e,
      costumeList: [422],
      action: {type: USER_LOGIN},
      handlerAction: (status, message) => userError(status, message, USER_LOGIN),
    }));
  }
};
