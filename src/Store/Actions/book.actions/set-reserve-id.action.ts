import {SET_RESERVE_ID, SetReserveIdType} from './book-actions.type';

export const setReserveId = (id: number): SetReserveIdType => ({
  type: SET_RESERVE_ID,
  payload: id,
});
