import {put, select, takeLatest} from 'redux-saga/effects';
import {APPLY_HOTELS_FILTER, ApplyHotelsFilterType, SetHotelsAfterFilters} from '../Actions';
import {HotelsActivesFilterType, HotelsFilterInterface, RootStateInterface, SortType} from 'Typescript';
import {Unity, Union} from 'Lib/FilterTool';
import ot from 'object-tool';

function* ApplyHotelsFilter({payload}: ApplyHotelsFilterType) {
  const {activeFilters, sortBy}: {activeFilters:HotelsActivesFilterType, structure: HotelsFilterInterface, sortBy: keyof SortType} = yield select((state: RootStateInterface) => (
    {
      activeFilters: state.hotelsReducer.filter!.actives!,
      structure: state.hotelsReducer.filter!.structure!,
      sortBy: state.hotelsReducer.filter!.sortBy,
    }
  ));
  const activeLength = ot.len(payload);
  let sort = [...activeFilters[sortBy]!.indexes];
  delete activeFilters[sortBy];
  if (!activeLength) {
    yield put(SetHotelsAfterFilters({[sortBy]: {name: 'sort', indexes: sort}}, sort));//, structure, sort));
    return;
  }
  const unionFilters: {[key: string]: number[]} = {};
  const newActiveFilter: HotelsActivesFilterType = {[sortBy]: {name: 'sort', indexes: sort}};
  // let structure2: any = {};
  let sorting: undefined | keyof SortType;
  ot.etch({...activeFilters, ...payload!}, (key, value) => {
    if (value!.name === 'sort') {
      delete newActiveFilter[sortBy];
      newActiveFilter[key] = {...value!};
      sort = [...value!.indexes];
      sorting = <keyof SortType>key;
      return;
    }
    if (key === 'search' && value!.name === '') {
      return;
    }
    if (key in activeFilters && key in payload! && key !== 'search') {
      return;
    } else if (value!.name in unionFilters) {
      unionFilters[value!.name] = Union({union: unionFilters[value!.name], args: [value!.indexes]});
    } else {
      unionFilters[value!.name] = [...value!.indexes];
    }
    newActiveFilter[key] = value;
  });
  let unityFilters: typeof sort;
  if (ot.len(newActiveFilter) > 1) {
    unityFilters = Unity({unity: sort, args: Object.values(unionFilters)});
  }
    //   ObjectForEtch(structure, ((key, value) => {
    //     if (key === 'sort')
    //       return;
    //     structure2[key] = {};
    //     ObjectForEtch(value, ((key1, value1) => {
    //       structure2[key][key1] = Unity({unity: unityFilters, args: [value1]});
    //     }));
    //   }));
    // } else {
    //   structure2 = {...structure};
    //   unityFilters = sort;
  // }
  else {
    unityFilters = sort;
  }
  yield put(SetHotelsAfterFilters(newActiveFilter, unityFilters, sorting));//, structure2, unityFilters));

}


export default takeLatest(APPLY_HOTELS_FILTER, ApplyHotelsFilter);

