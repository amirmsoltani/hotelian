import {BoardTypeType, StarsRatingType, SortType} from '../Types';

export interface HotelsFilterInterface<T = number[]> {
  boardTypes: BoardTypeType<T>;
  locations: {[key: string]: T};
  rangePrice: {[key: string]: T};
  stars: StarsRatingType<T>;
  sort: SortType<T>
  // sorting: object;
  // other: object;
}
