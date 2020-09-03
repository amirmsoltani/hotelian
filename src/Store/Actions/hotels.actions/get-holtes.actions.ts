import {GET_HOTELS, GetHotelsType} from './hotels.actions.types';

export function GetHotels(search_id: string): GetHotelsType {
  return {
    type: GET_HOTELS,
    payload: search_id,
  };
}
