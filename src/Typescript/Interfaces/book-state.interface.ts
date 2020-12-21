import {HotelOptionInterface} from './hotel-option.interface';
import {HotelInterface} from './hotel.interface';
import {CancellationPolicyInterface} from './cancellation-policy.interface';
import {Room} from 'Forms/guest-form/guest-from-type';
import {StatusType} from '../Types';

export interface PassengersStateInterface {
  option: HotelOptionInterface;
  hotel: HotelInterface;
  policies: CancellationPolicyInterface
}

export interface BookStateInterface {
  passenger?: {rooms: Room[], late_checkin?: string, description?: string, option_id: string, status?: StatusType, reserve_id?: number},
}
