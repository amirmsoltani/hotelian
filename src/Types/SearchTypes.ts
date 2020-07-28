import {ServerResponse, ServerData, Action} from './Global';
import {SET_SEARCH_DATA, SET_DESTINATIONS_LIST, SET_NATIONALITIES_LIST} from '../Actions/TypesActions';

//Types
export interface Destination {
  'dest_code': string,
  'dest_type': string,
  'label': string,
  'text': string,
}

export interface Nationality {
  code: 'string',
  name: 'string',
}

export interface Rooms {
  child: number;
  adults: number;
}

//Axios Server
export interface SearchServerData extends ServerData {
  result: Destination[] | []
}

export interface SearchServerResponse extends ServerResponse {
  data: SearchServerData;
}

//Reducer Actions
export interface SearchData {
  destination?: Destination;
  nationality?: Nationality;
  checkIn?: string;
  checkOut?: string;
  rooms?: Rooms[];
  adultCounts?: number;
  childCounts?: number;
}

export interface SearchReducerState {
  destinations?: Destination[];
  nationalities?: Nationality[];
  searchData?: SearchData;
}


//Actions


export interface GetDestinationsType extends Action {
  payload: {debounce: number, search: string};
}

export interface GetNationalitiesType extends GetDestinationsType {
}

export interface SetDestinationsType extends Action {
  type: typeof SET_DESTINATIONS_LIST,
  payload: Destination[] | []
}

export interface SetNationalitiesType extends Action {
  type: typeof SET_NATIONALITIES_LIST,
  payload: Nationality[] | []
}

export interface SetSearchData extends Action {
  type: typeof SET_SEARCH_DATA;
  payload: SearchData
}


export type SearchReducerActions = SetSearchData | SetDestinationsType | SetNationalitiesType;

//implements

