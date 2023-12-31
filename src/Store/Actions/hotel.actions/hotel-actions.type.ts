import {
  HotelDetailsInterface, HotelOptionInterface, OptionFilterInterface, OptionsActiveFiltersType,
  RoomsDetailsInterface,
} from 'Typescript';
import {SetStatusType} from '../global.actions/set-status.action';

export const GET_HOTEL = '[Hotel Reducer] Get Hotel';
export type GetHotelType = {type: typeof GET_HOTEL, url: string};

export const GET_HOTELS_ROOMS = '[Hotel Reducer] Get Hotels Rooms';
export type GetHotelRoomsType = {url: string, type: typeof GET_HOTELS_ROOMS, hotel_id: number, search_id: string}

export const SET_HOTEL_DATA = '[Hotel Reducer] Set Hotel Data';
export type SetHotelDataType = {type: typeof SET_HOTEL_DATA, payload: HotelDetailsInterface};


export const SET_HOTELS_ROOMS = '[Hotel Reducer] Set Hotel Rooms';
export type SetHotelRoomType = {
  type: typeof SET_HOTELS_ROOMS,
  payload: RoomsDetailsInterface & {
    filter?: {
      structure: OptionFilterInterface,
      actives?: OptionsActiveFiltersType,
      rooms: number[]
    }
  }
}

export const SET_OPTIONS_POLITICS = '[Hotel Reducer] Set Options Politics';
export type SetOptionPoliticsType = {
  type: typeof SET_OPTIONS_POLITICS,
  payload: HotelOptionInterface[],
}
export const SET_HOTELS_OPTIONS_AFTER_FILTER = '[Hotel Reducer] Set Hotel Options After Filter';
export type SetHotelsOptionsAfterFilterType = {type: typeof SET_HOTELS_OPTIONS_AFTER_FILTER, payload: {actives?: OptionsActiveFiltersType, options?: number[]}}

export type HotelActionsType =
  SetHotelDataType
  | SetHotelRoomType
  | GetHotelType
  | GetHotelRoomsType
  | SetOptionPoliticsType
  | SetStatusType
  | SetHotelsOptionsAfterFilterType;
