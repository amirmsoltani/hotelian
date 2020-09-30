import {DateType, HotelType, NationalityType, RoomType} from '../Types';
import {HotelOptionInterface} from './hotel-option.interface';

export interface RoomsDetailsInterface {
  currency: string;
  expire: number;
  checkin: DateType;
  checkout: DateType;
  night_count: number;
  rooms_count: number;
  adults: number;
  children: number;
  city: string;
  country: string;
  nationality: NationalityType;
  req_rooms: RoomType[];
  hotel: HotelType;
  options: HotelOptionInterface[];

}
