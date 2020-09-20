import {APPLY_HOTELS_FILTER, ApplyHotelsFilterType} from './hotels.actions.types';
import {Union, Unity} from '../../../Lib/FilterTool';

export const ApplyHotelsFilters = (actives: {[key: string]: {name: string, indexes: number[]}}, structure: any): ApplyHotelsFilterType => {
  let union: {[key: string]: number[]} = {};
  if (Object.entries(actives).length === 0)
    return {
      type: APPLY_HOTELS_FILTER,
      payload: {actives: undefined, hotels: [], structure: undefined},
    };
  Object.keys(actives).forEach(item => {
    if (union[actives[item].name] === undefined)
      union[actives[item].name] = actives[item].indexes;
    else
      union[actives[item].name] = Union({args: [actives[item].indexes, union[actives[item].name]]});
  });
  const values = Object.values(union);
  const length: any = {};
  const unity = values.length > 1 ? Unity({args: values}) : values[0];

  Object.keys(structure).forEach((key => {
    const parent = structure[key];
    if (Array.isArray(parent))
      length[key] = Unity({unity, args: [parent]});
    else {
      length[key] = {};
      Object.keys(parent).forEach(key1 => {
        length[key][key1] = Unity({unity, args: [parent[key1]]});
      });
    }
  }));
  return {
    type: APPLY_HOTELS_FILTER,
    payload: {structure: length, hotels: unity, actives: actives},
  };
};
