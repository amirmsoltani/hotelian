import {
  HttpRequestActionInterface,
  DestinationType,
  HttpResponseActionInterface,
  NationalityType, ActionInterface, SearchFormDataInterface,
} from '../../../Typescript';

export const GET_DESTINATION = '[Search Reducer] Get Destination';
export type GetDestinationType = HttpRequestActionInterface<typeof GET_DESTINATION, 'destination', 'GET', DestinationType[]>;

export const GET_NATIONALITY = '[Search Reducer] Get Nationality';
export type GetNationalityType = HttpRequestActionInterface<typeof GET_NATIONALITY, 'nationality', 'GET', NationalityType[]>

export const SET_SEARCH_RESPONSE = '[Search Reducer] Set Search Response';
export type SetSearchResponseType = HttpResponseActionInterface<GetDestinationType | GetNationalityType, typeof SET_SEARCH_RESPONSE>

export const CHANGE_SEARCH_FORM_DATA = '[Search Reducer] Change Search Form Data';
export type ChangeSearchFormDataType = ActionInterface<typeof CHANGE_SEARCH_FORM_DATA, SearchFormDataInterface>

export const ACCEPT_SEARCH_FORM = '[Search Reducer] Accept Search From';
export type AcceptSearchFormType = ActionInterface<typeof ACCEPT_SEARCH_FORM, undefined>

export const SET_SEARCH_ID = '[Search Reducer] Set Search ID';
export type SetSearchIdType = {readonly type: typeof SET_SEARCH_ID, payload: {search_id: string, expire: number}};

export const SEARCH_EXPIRE = '[Search Reducer] Expire Search ID';
export type SearchExpireType = {readonly type: typeof SEARCH_EXPIRE};

export const AUTO_COMPLETE_ERROR = '[Search Reducer] Auto Complete Error';
export type AutoCompleteErrorType = {type: typeof AUTO_COMPLETE_ERROR, target: 'destination' | 'nationality'}

export type SearchActionTypes =
  GetDestinationType
  | GetNationalityType
  | SetSearchResponseType
  | ChangeSearchFormDataType
  | SetSearchIdType
  | SearchExpireType
  | AcceptSearchFormType
  | AutoCompleteErrorType
  ;
