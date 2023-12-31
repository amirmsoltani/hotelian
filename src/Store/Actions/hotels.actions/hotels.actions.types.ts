import {HotelsActivesFilterType, HotelsFilterInterface, HotelsStateInterface, SortType} from '../../../Typescript';
import {SearchExpireType, SetSearchIdType} from '../search.actions';

export const GET_HOTELS = '[Hotels Reducer] Get Hotels';
export type GetHotelsType = {type: typeof GET_HOTELS, payload: string}

export const SET_HOTELS = '[Hotels Reducer] Set Hotels';
export type SetHotelType = {type: typeof SET_HOTELS, payload: HotelsStateInterface};

export const APPLY_HOTELS_FILTER = '[Hotels Reducer] Apply Filter';
export type ApplyHotelsFilterType = {
  type: typeof APPLY_HOTELS_FILTER,
  payload: HotelsActivesFilterType | undefined,

}

export const SET_HOTELS_AFTER_FILTERS = '[Hotels Reducer] Set Hotels Filters';
export type SetHotelsAfterFiltersType = {
  type: typeof SET_HOTELS_AFTER_FILTERS,
  payload: {
    // structure?: HotelsFilterInterface,
    actives: HotelsActivesFilterType | undefined;
    hotels: number[];
    sorting?: keyof SortType;
  }
}


export type HotelsActionTypes =
  GetHotelsType
  | SetSearchIdType
  | SetHotelType
  | SearchExpireType
  | ApplyHotelsFilterType
  | SetHotelsAfterFiltersType;
