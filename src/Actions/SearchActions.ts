import {GetDestinationsType, SearchData, SetSearchData, GetNationalitiesType} from '../Types/SearchTypes';
import {GET_DESTINATIONS_LIST, GET_NATIONALITIES_LIST, SET_SEARCH_DATA} from './TypesActions';

export const ChangeDestination = (search: string): GetDestinationsType =>
  ({
      type: GET_DESTINATIONS_LIST,
      payload: {debounce: 1000, search: search},
    }
  )
;
export const ChangeNationality = (search: string): GetNationalitiesType =>
  ({
    type: GET_NATIONALITIES_LIST,
    payload: {debounce: 1000, search},
  });


export const setSearchData = (data: SearchData): SetSearchData => (
  {
    type: SET_SEARCH_DATA,
    payload: data,
  }
);



