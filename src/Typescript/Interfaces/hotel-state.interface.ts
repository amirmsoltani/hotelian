import {HotelDetailsInterface} from './hotel-details.interface';
import {StatusType} from '../Types';

export interface HotelStateInterface {
  hotel: {status: StatusType; result?: HotelDetailsInterface};
  rooms?: {status: StatusType, result?: any};
}
