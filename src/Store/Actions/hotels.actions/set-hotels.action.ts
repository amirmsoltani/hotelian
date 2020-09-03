import {SET_HOTELS, SetHotelType} from './hotels.actions.types';
import {HotelsStateInterface} from '../../../Typescript';

export function SetHotels(payload: HotelsStateInterface): SetHotelType {
  return {
    type: SET_HOTELS,
    payload,
  };
}
