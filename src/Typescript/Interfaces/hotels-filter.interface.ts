import {BoardTypeType, StarsRatingType, SortType, OtherFilterType} from '../Types';

export interface HotelsFilterInterface<T = number[]> {
  boardTypes: BoardTypeType<T>;
  locations: {[key: string]: T};
  rangePrice: {[key: string]: T};
  stars: StarsRatingType<T>;
  sort: SortType<T>;
  other: OtherFilterType<T>;

  [key: string]: Partial<{[key: string]: T}>;

  // sorting: object;
  // other: object;
}
