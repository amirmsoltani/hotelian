import {BoardTypeType, StarsRatingType} from '../Types';

export interface HotelsFilterInterface {
  boardTypes: BoardTypeType;
  locations: {[key: string]: number[]};
  rangePrice: {[key: string]: number[]};
  stars: StarsRatingType;
  // sorting: object;
  // other: object;
}
