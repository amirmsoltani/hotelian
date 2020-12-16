import {AppError, AppErrorType} from '../Store/Actions';
import {AxiosError} from 'axios';
import {ErrorMessageType} from 'Typescript/Types';
import {translate} from 'Lib/Languages';
import NetInfo from '@react-native-community/netinfo';
import {Action} from 'redux';

const Title: any = {
  500: translate('server-error'),
  502: translate('network-error'),
  422: translate('validation-error'),
  404: translate('not-found'),
  403: translate('auth-error'),
  1: translate('unknown-error'),
};
type ParamType<A> = {
  error: AxiosError,
  canClose?: boolean,
  costumeList?: number[],
  action?: {type: string, [key: string]: any},
  handlerAction?: (status: number, message: ErrorMessageType) => A,
};

export async function error_handler<A extends {type: string}>({error, canClose = true, costumeList, action, handlerAction}: ParamType<A>): Promise<AppErrorType | A> {
  let message: ErrorMessageType;
  let code: number;
  if (!error.isAxiosError || !error.response) {
    if (!(await NetInfo.fetch()).isConnected) {
      message = translate('your-network-has-encountered-an-error.-please-check-your-connections');
      code = 502;
    } else {
      message = translate('something-wrong-please-try-again');
      code = 1;
    }
  } else {
    message = error.response!.data.result.message as ErrorMessageType;
    code = error.response.status;
  }
  if (handlerAction && costumeList && (costumeList.includes(code) || costumeList.includes(0))) {
    return handlerAction(code, message);
  } else {
    return AppError({close: canClose, code, messages: message, title: Title[code], action});
  }
}


