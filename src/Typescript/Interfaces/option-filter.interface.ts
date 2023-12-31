import {BoardTypeType, OtherFilterType} from '../Types';

export interface OptionFilterInterface<T = number[]> {
  boardTypes: BoardTypeType<T>;
  rangePrice: {[key: string]: T};
}
