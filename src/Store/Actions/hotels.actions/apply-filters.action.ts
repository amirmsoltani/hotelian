import {APPLY_HOTELS_FILTER, ApplyHotelsFilterType} from './hotels.actions.types';


export const ApplyHotelsFilters = (actives: Array<number[]>): ApplyHotelsFilterType => ({
    type: APPLY_HOTELS_FILTER,
    payload: {actives},
  }
);
