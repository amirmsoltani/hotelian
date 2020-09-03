import {BoardTypeType} from '../Types';

export interface HotelsFilterInterface {
  boardTypes: BoardTypeType;
  locations: object;
  rangePrice: object;
  stars: object;
  sorting: object;
  other: object;
}
