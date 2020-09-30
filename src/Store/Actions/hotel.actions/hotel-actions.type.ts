import {HotelDetailsInterface, HttpRequestActionInterface, RoomsDetailsInterface} from 'Typescript';

export const GET_HOTEL = '[Hotel Reducer] Get Hotel';
export type GetHotelType = HttpRequestActionInterface<typeof GET_HOTEL, 'hotel', 'GET', HotelDetailsInterface>

export const GET_HOTELS_ROOMS = '[Hotel Reducers] Get Hotels Rooms';
export type GetHotelRoomsType = HttpRequestActionInterface<typeof GET_HOTELS_ROOMS, 'rooms', 'GET', RoomsDetailsInterface>


export type HotelHttpActionsType = GetHotelType | GetHotelRoomsType;


export const SET_HOTEL_DATA = '[Hotel Reducer] Set Hotel Data';
export type SetHotelDataType = {type: typeof SET_HOTEL_DATA, payload: HotelHttpActionsType};


export type HotelActionsType = HotelHttpActionsType | SetHotelDataType;
