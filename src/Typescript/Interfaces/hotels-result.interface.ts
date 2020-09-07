import {FacilityType} from '../Types';
import {HotelInterface} from 'src/Typescript/Interfaces/hotel.interface';
import {SearchDetailsInterface} from 'src/Typescript/Interfaces/search-details.interface';

export interface HotelsResultInterface {
  currency: string;
  expire: number;
  facilities: FacilityType[];
  hotels: HotelInterface[];
  hotel_count: number;
  search_details: SearchDetailsInterface;

}
