import {ErrorMessageType, StatusType, userType} from '../Types';

export interface UserStateInterface {
  user?: userType;
  status: StatusType;
  user_token?: string;
  message?:ErrorMessageType
}
