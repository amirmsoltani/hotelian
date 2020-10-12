import {SET_HOTELS_AFTER_FILTERS, SetHotelsAfterFiltersType} from './hotels.actions.types';
import {HotelsFilterInterface, HotelsActivesFilterType, SortType} from 'Typescript';


export const SetHotelsAfterFilters = (actives: HotelsActivesFilterType | undefined, hotels: number[], sorting?: keyof SortType): SetHotelsAfterFiltersType => ({//, structure: HotelsFilterInterface | undefined, hotels: number[]): SetHotelsAfterFiltersType => ({
    type: SET_HOTELS_AFTER_FILTERS,
    payload: {
      actives,
      hotels,
      sorting,
    },
  }
);
