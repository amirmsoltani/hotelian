import {UserStateInterface} from '../../Typescript/Interfaces';
import {SET_STATUS} from '../Actions/global.actions/set-status.action';
import {USER_ERROR, USER_LOGIN, UserActionsType} from '../Actions/user.actions';
import storage from '../../Lib/Storage';
import {userType} from '../../Typescript/Types';

const defaultData: UserStateInterface = {
  status: undefined,
  user: undefined,
};
export const userInit = async (): Promise<UserStateInterface> => {
  try {
    const userData = await storage.load({key: 'user-data'}) as {user_token: string, user: userType};
    defaultData.user_token = userData.user_token;
    defaultData.user = userData.user;
  } catch (e) {
  }
  return defaultData;
};

function userReducer(state: UserStateInterface = defaultData, action: UserActionsType): UserStateInterface {
  switch (action.type) {

    case USER_LOGIN:
      return {...state, status: 'ok', user: action.payload.user, user_token: action.payload.user_token};
    case USER_ERROR:
      return {...state, message: action.payload.message, status: 'error'};
    case SET_STATUS:
      if (action.target === 'user') {
        return {...state, status: action.status};
      }
    default:
      return state;
  }
}

export default userReducer;
