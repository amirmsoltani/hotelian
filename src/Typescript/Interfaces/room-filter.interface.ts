import {BoardTypeType} from '../Types';

export interface RoomFilterInterface {
  boardTypes: BoardTypeType;
  rangePrice: {[key: string]: number[]};
}
