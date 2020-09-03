import {SearchDetailsInterface} from './search-details.interface';
import {HotelInterface} from './hotel.interface';
import {FacilityType} from '../Types';

export interface HotelsStateInterface {
  hotels?: HotelInterface[];
  facilities?: FacilityType[];
  filtered_hotel?: number[];
  status?: 'ok' | 'loading' | 'expire' | 'error';
  filters?: object;
  active_filter?: object;
  search_id?: string;
  expire?: number;
  search_details?: SearchDetailsInterface;
}
