import {
  OptionsActiveFiltersType,
  RootStateInterface,
} from 'Typescript';
import {Dispatch} from 'redux';
import ot from 'object-tool';
import {Union, Unity} from 'Lib/FilterTool';
import {setHotelOptionsAfterFilter} from './set-hotels-options-after-filter.action';

export const HotelOptionFilter = (filter?: OptionsActiveFiltersType) => {
  return (dispatch: Dispatch, getState: () => RootStateInterface) => {
    const actives = getState().hotelReducer.rooms.result!.filter.actives!;
    const activeLength = ot.len(filter || {});
    if (!activeLength) {
      return dispatch(setHotelOptionsAfterFilter());
    }
    const unionFilters: {[key: string]: number[]} = {};
    const newActiveFilter: OptionsActiveFiltersType = {};
    ot.etch({...actives!, ...filter!}, (key, value) => {

      if (key in actives! && key in filter!) {
        return;
      } else if (value!.name in unionFilters) {
        unionFilters[value!.name] = Union({union: unionFilters[value!.name], args: [value!.indexes]});
      } else {
        unionFilters[value!.name] = [...value!.indexes];
      }
      newActiveFilter[key] = value;
    });
    let unityFilters: number[];
    if (ot.len(unionFilters) > 1) {
      unityFilters = Unity({args: Object.values(unionFilters)});
    } else {
      unityFilters = Object.values(unionFilters)[0];
    }
    dispatch(setHotelOptionsAfterFilter(unityFilters, newActiveFilter));
  };
};
