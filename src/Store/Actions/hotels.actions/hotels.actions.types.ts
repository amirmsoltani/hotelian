import { HotelsStateInterface} from '../../../Typescript';
import {SearchExpireType, SetSearchIdType} from '../search.actions';

export const GET_HOTELS = '[Hotels Reducer] Get Hotels';
export type GetHotelsType = {type: typeof GET_HOTELS, payload: string}

export const SET_HOTELS = '[Hotels Reducer] Set Hotels';
export type SetHotelType = {type: typeof SET_HOTELS, payload: HotelsStateInterface};

export const APPLY_HOTELS_FILTER = '[Hotels Reducer] Apply Filter';
export type ApplyHotelsFilterType = {type: typeof APPLY_HOTELS_FILTER, payload: {actives: Array<number[]>}};


export type HotelsActionTypes = GetHotelsType | SetSearchIdType | SetHotelType | SearchExpireType;
