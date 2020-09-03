import {
  GetDestinationType,
  GetNationalityType,
  SET_SEARCH_RESPONSE,
  SetSearchResponseType,
} from './search.actions.types';

/**
 * action call after response from server transform to reducer
 * @param action: GetDestinationType | GetNationalityType
 * @constructor
 */
export function SetSearchResponse(action: GetDestinationType | GetNationalityType): SetSearchResponseType {
  return {
    type: SET_SEARCH_RESPONSE,
    payload: action,
  };
}
