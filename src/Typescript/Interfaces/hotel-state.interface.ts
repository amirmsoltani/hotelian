import {HotelDetailsInterface} from './hotel-details.interface';
import {OptionsActiveFiltersType, StatusType} from '../Types';
import {RoomsDetailsInterface} from './rooms-details.interface';
import {OptionFilterInterface} from './option-filter.interface';

export interface HotelStateInterface {
  hotel: {status: StatusType; result?: HotelDetailsInterface};
  rooms: {
    status: StatusType, result?: RoomsDetailsInterface & {
      filter: {
        structure: OptionFilterInterface,
        actives?: OptionsActiveFiltersType,
        rooms: number[]
      }
    }
  };
}
