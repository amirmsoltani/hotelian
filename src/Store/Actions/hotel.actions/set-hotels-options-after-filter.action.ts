import {OptionsActiveFiltersType} from '../../../Typescript/Types';
import {SET_HOTELS_OPTIONS_AFTER_FILTER, SetHotelsOptionsAfterFilterType} from './hotel-actions.type';


export const setHotelOptionsAfterFilter = (options?: number[], actives?: OptionsActiveFiltersType): SetHotelsOptionsAfterFilterType => ({
  type: SET_HOTELS_OPTIONS_AFTER_FILTER,
  payload: {options, actives},
});
