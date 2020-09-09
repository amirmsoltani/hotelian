import {BoardTypeType, StarsRatingType} from '../Types';

export interface HotelsFilterInterface<T=number[]> {
  boardTypes: BoardTypeType<T>;
  locations: {[key: string]: T};
  rangePrice: {[key: string]: T};
  stars: StarsRatingType<T>;
  // sorting: object;
  // other: object;
}
