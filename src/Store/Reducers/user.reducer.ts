import {UserStateInterface} from '../../Typescript';

export const userInit: UserStateInterface = {
  currency: 'USD',
  language: 'fa',
};
const UserReducer = (state: UserStateInterface = userInit, action: any): UserStateInterface => {
  switch (action.type) {
    default:
      return state;
  }
};

export default UserReducer;
