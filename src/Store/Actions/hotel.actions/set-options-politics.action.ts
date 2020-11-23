import {SET_OPTIONS_POLITICS, SetOptionPoliticsType} from './hotel-actions.type';
import {HotelOptionInterface} from 'Typescript/Interfaces';

export const SetOptionsPolitics = (options: HotelOptionInterface[]): SetOptionPoliticsType => ({
  type: SET_OPTIONS_POLITICS,
  payload: options,
});
