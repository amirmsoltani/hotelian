import {SET_HOTELS_ROOMS, SetRoomsPoliticsType} from './hotel-actions.type';
import {HotelOptionInterface} from 'Typescript/Interfaces';

export const SetRoomPolitics = (options: HotelOptionInterface): SetRoomsPoliticsType => ({
  type: SET_HOTELS_ROOMS,
  payload: options,
});
