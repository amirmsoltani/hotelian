import {SetSearchIdType, SET_SEARCH_ID} from './search.actions.types';

export function SetSearchId(search_id: string): SetSearchIdType {
  return {
    type: SET_SEARCH_ID,
    payload: search_id,
  };
}
