import {put, select, takeLatest} from 'redux-saga/effects';
import {APPLY_HOTELS_FILTER, ApplyHotelsFilterType, SetHotelsAfterFilters} from '../Actions';
import {HotelInterface, RootStateInterface} from '../../Typescript';
import {Unity} from '../../Lib/FilterTool';

function* ApplyHotelsFilter({payload: {actives, union}}: ApplyHotelsFilterType) {
  const structure: any = yield select((state: RootStateInterface) => state.hotelsReducer.filter!.structure);
  if (union.length === 0) {
    const hotels: HotelInterface[] = yield select((state: RootStateInterface) => state.hotelsReducer.basicData?.hotels);
    const list = [...(hotels.keys())];
    yield put(SetHotelsAfterFilters(undefined, undefined, list));
    return;
  }
  const unity = union.length > 1 ? Unity(...union) : union[0];
  const length: any = {};
  Object.keys(structure).forEach((key => {
    const parent = structure[key];
    if (Array.isArray(parent))
      length[key] = Unity(unity, parent);
    else {
      length[key] = {};
      Object.keys(parent).forEach(key1 => {
        length[key][key1] = Unity<number>(unity, parent[key1]);
      });
    }
  }));
  yield put(SetHotelsAfterFilters(actives, length, unity));
  console.log('update', new Date().getTime());
}


export default takeLatest(APPLY_HOTELS_FILTER, ApplyHotelsFilter);

