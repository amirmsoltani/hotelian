import {DESTINATIONS_URL} from '../../../URLS';

export function GetDestination(search: string): GetDestinationType {
  return {
    type: GET_DESTINATION,
    method: 'GET',
    target: 'destination',
    url: `${DESTINATIONS_URL}?term=${search}`,
    debounce: 1000,
  };
}
