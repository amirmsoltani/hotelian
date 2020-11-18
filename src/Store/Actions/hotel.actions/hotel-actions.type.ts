import {
  HotelDetailsInterface, OptionFilterInterface, OptionsActiveFiltersType,
  RoomsDetailsInterface,
} from 'Typescript';

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
    filter: {
      structure: OptionFilterInterface,
      actives?: OptionsActiveFiltersType,
      hotels: number[]
    }
  }
}


export type HotelActionsType = SetHotelDataType | SetHotelRoomType | GetHotelType | GetHotelRoomsType;
