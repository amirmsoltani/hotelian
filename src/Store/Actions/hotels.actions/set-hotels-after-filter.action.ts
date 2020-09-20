import {SET_HOTELS_AFTER_FILTERS, SetHotelsAfterFiltersType} from './hotels.actions.types';
import {HotelsFilterInterface} from 'src/Typescript';


export const SetHotelsAfterFilters = (actives: {[key: string]: {indexes: number[], name: string}} | undefined, structure: HotelsFilterInterface<number[]> | undefined, hotels: number[]): SetHotelsAfterFiltersType => ({
    type: SET_HOTELS_AFTER_FILTERS,
    payload: {
      actives,
      structure,
      hotels,
    },
  }
);
