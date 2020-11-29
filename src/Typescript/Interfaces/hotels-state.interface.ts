import {SearchDetailsInterface} from './search-details.interface';
import {HotelsFilterInterface} from './hotels-filter.interface';
import {HotelInterface} from './hotel.interface';
import {FacilityType, HotelsActivesFilterType, SortType} from '../Types';

export interface HotelsStateInterface {
  status: 'ok' | 'loading' | 'expire' | 'error' | null;
  filter?: {
    hotels: number[];
    structure: HotelsFilterInterface;
    actives?: HotelsActivesFilterType;
    numbers?: HotelsFilterInterface;
    sortBy: keyof SortType;
  }
  basicData?: {
    search_id: string;
    hotels: HotelInterface[];
    facilities: FacilityType[];
    search_details: SearchDetailsInterface;
    expire: number;
  }

}
