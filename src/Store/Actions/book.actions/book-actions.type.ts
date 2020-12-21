import {HttpRequestActionInterface} from '../../../Typescript/Interfaces';
import {Room} from 'Forms/guest-form/guest-from-type';

export const GET_PASSENGERS = '[Book Reducer] Get Passengers';
type GetPassengersType = HttpRequestActionInterface<typeof GET_PASSENGERS, 'passengers', 'GET', any>

export const CONFIRM_RESERVE_DATA = '[Book Reducer] Confirm Reserve Data';
export type ConfirmReserveDataType = {type: typeof CONFIRM_RESERVE_DATA}

export const SET_RESERVE_ID = '[Book Reducer] Set Reserve Data';
export type SetReserveIdType = {type: typeof SET_RESERVE_ID, payload: number};

export const GET_CONFIRM_DATA = '[Book Reducer] Get Confirm Data';
export type GetConfirmDataType = {type: typeof GET_CONFIRM_DATA};


export type BookHttp = GetPassengersType

export const PASSENGER_SAVE = '[Book Reducer] Passenger Save';
export type PassengerSaveType = {
  type: typeof PASSENGER_SAVE,
  payload: {
    rooms: Room[],
    option_id: string,
    description: string,
    late_checkin?: string
  }
};


export type BookActionsType =
  BookHttp
  | PassengerSaveType
  | ConfirmReserveDataType
  | SetReserveIdType
  | GetConfirmDataType
