import {SET_HOTELS_AFTER_FILTERS, SetHotelsAfterFiltersType} from './hotels.actions.types';
import {HotelsFilterInterface, HotelsActivesFilterType} from 'Typescript';


export const SetHotelsAfterFilters = (actives: HotelsActivesFilterType | undefined, structure: HotelsFilterInterface | undefined, hotels: number[]): SetHotelsAfterFiltersType => ({
    type: SET_HOTELS_AFTER_FILTERS,
    payload: {
      actives,
      structure,
      hotels,
    },
  }
);
