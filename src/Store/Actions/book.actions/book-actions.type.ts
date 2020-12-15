import {HttpRequestActionInterface} from '../../../Typescript/Interfaces';
import {Room} from 'Forms/guest-form/guest-from-type';

export const GET_PASSENGERS = '[Book Reducer] Get Passengers';
type GetPassengersType = HttpRequestActionInterface<typeof GET_PASSENGERS, 'passengers', 'GET', any>

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


export type BookActionsType = BookHttp | PassengerSaveType
