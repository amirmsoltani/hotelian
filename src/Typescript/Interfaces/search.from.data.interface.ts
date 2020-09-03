import {DestinationType, NationalityType, RoomType} from '../Types';

export interface SearchFormDataInterface {
  destination?: DestinationType;
  nationality?: NationalityType;
  checkIn?: {value: string, formatted: string};
  checkOut?: {value: string, formatted: string};
  rooms?: RoomType[];
  adultCounts?: number;
  childCounts?: number;
}
