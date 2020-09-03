import {NationalityType, RoomType} from 'src/Typescript';

export interface SearchDetailsInterface {
  checkin: {rwa: string, formatted: string};
  checkout: {rwa: string, formatted: string};
  country: string;
  dest_code: number;
  dest_name: string;
  dest_type: string;
  nationality: NationalityType;
  nights_count: number;
  rooms:RoomType[]
}
