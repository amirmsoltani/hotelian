import {HotelDetailsInterface, HotelType, HttpRequestActionInterface} from 'Typescript';

export const GET_HOTEL = '[Hotel Reducer] Get Hotel';
export type GetHotelType = HttpRequestActionInterface<typeof GET_HOTEL, 'hotel', 'GET', HotelDetailsInterface>

export type HotelHttpActionsType = GetHotelType;


export const SET_HOTEL_DATA = '[Hotel Reducer] Set Hotel Data';
export type SetHotelDataType = {type: typeof SET_HOTEL_DATA, payload: HotelHttpActionsType};


export type HotelActionsType = GetHotelType | SetHotelDataType;
