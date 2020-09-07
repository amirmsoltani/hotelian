import {HotelsStateInterface} from '../../../Typescript';
import {SearchExpireType, SetSearchIdType} from '../search.actions';

export const GET_HOTELS = '[Hotels Reducer] Get Hotels';
export type GetHotelsType = {type: typeof GET_HOTELS, payload: string}

export const SET_HOTELS = '[Hotels Reducer] Set Hotels';
export type SetHotelType = {type: typeof SET_HOTELS, payload: HotelsStateInterface};


export type HotelsActionTypes = GetHotelsType | SetSearchIdType | SetHotelType | SearchExpireType;
