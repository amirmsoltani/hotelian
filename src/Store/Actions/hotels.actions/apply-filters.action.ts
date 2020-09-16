import {APPLY_HOTELS_FILTER, ApplyHotelsFilterType} from './hotels.actions.types';
import {Union} from '../../../Lib/FilterTool';

export const ApplyHotelsFilters = (actives: {[key: string]: {name: string, indexes: number[]}}): ApplyHotelsFilterType => {
  let union: {[key: string]: number[]} = {};
  if (Object.entries(actives).length === 0)
    return {
      type: APPLY_HOTELS_FILTER,
      payload: {actives, union: []},
    };
  Object.keys(actives).filter(item => {
    if (union[actives[item].name] === undefined)
      union[actives[item].name] = actives[item].indexes;
    else
      union[actives[item].name] = Union({args: [union[actives[item].name], actives[item].indexes]});
  });
  return {
    type: APPLY_HOTELS_FILTER,
    payload: {actives, union: Object.values(union)},
  };
};
