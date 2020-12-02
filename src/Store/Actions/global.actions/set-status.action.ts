import {StatusType} from 'Typescript/Types';

export const SET_STATUS = '[Global Action] Set Status';
export type SetStatusType = {type: typeof SET_STATUS, target: string, status: StatusType};
export const setStatus = (target: string, status: StatusType): SetStatusType => {
  return {
    type: SET_STATUS,
    target,
    status,
  };
};
