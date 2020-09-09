import {put, takeLatest, select} from 'redux-saga/effects';
import {ApplyHotelsFilterType} from '../Actions';
import {HotelsFilterInterface, RootStateInterface} from '../../Typescript';
import {Unity} from '../../Lib/FilterTool';

function* ApplayHotelsFilter({payload}: ApplyHotelsFilterType) {
  const structure = yield select((state: RootStateInterface) => state.hotelsReducer.filter!.structure);
  const list = Unity<number>({args: payload.actives});
  const len: {[key: string]: (number | {[key: string]: number})} = {};
  Object.keys(structure).forEach(key => {
    if (Array.isArray(structure[key]))
      len[key] = Unity<number>({unity: list, args: [structure[key]]}).length;
    else {
      len[key] = {};
      Object.keys(structure[key]).forEach(key2 => {
        len2[key2] = Unity<number>(structure[key][key2]).length;
      });
    }
  });
}

