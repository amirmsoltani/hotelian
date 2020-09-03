import {GET_NATIONALITY, GetNationalityType} from './search.actions.types';
import {NATIONALITIES_URL} from '../../../URLS';

export function GetNationality(search: string): GetNationalityType {
  return {
    type: GET_NATIONALITY,
    method: 'GET',
    target: 'nationality',
    url: `${NATIONALITIES_URL}?term=${search}`,
    debounce: 1000,
  };
}
