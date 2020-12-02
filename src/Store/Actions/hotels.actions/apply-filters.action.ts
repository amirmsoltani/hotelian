import {APPLY_HOTELS_FILTER, ApplyHotelsFilterType} from './hotels.actions.types';
import {HotelsActivesFilterType} from 'Typescript';

export const ApplyHotelsFilters = (actives: HotelsActivesFilterType): ApplyHotelsFilterType => {
  return {
    type: APPLY_HOTELS_FILTER,
    payload: actives,
  };
  // let union: {[key: string]: number[]} = {};
  // if (Object.entries(actives).length === 0)
  //   return {
  //     type: APPLY_HOTELS_FILTER,
  //     payload: {actives: undefined, hotels: [], structure: undefined},
  //   };
  // ObjectKeys(actives).forEach(item => {
  //   if (union[actives[item].name] === undefined)
  //     union[actives[item].name] = actives[item].indexes;
  //   else
  //     union[actives[item].name] = Union({args: [actives[item].indexes, union[actives[item].name]]});
  // });
  // const values = Object.values(union);
  // const length: any = {};
  // const unity = values.length > 1 ? Unity({args: values}) : values[0];
  //
  // ObjectKeys(structure).forEach((key => {
  //   const parent = structure[key];
  //   if (Array.isArray(parent))
  //     length[key] = Unity({unity, args: [parent]});
  //   else {
  //     length[key] = {};
  //     ObjectKeys(parent).forEach(key1 => {
  //       length[key][key1] = Unity({unity, args: [parent[key1]]});
  //     });
  //   }
  // }));
  // return {
  //   type: APPLY_HOTELS_FILTER,
  //   payload: {structure: length, hotels: unity, actives: actives},
  // };
};
