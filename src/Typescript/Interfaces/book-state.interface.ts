import {HotelOptionInterface} from './hotel-option.interface';
import {HotelInterface} from './hotel.interface';
import {CancellationPolicyInterface} from './cancellation-policy.interface';
import {Room} from 'Forms/guest-form/guest-from-type';

export interface PassengersStateInterface {
  option: HotelOptionInterface;
  hotel: HotelInterface;
  policies: CancellationPolicyInterface
}

export interface BookStateInterface {
  passenger?: {rooms: Room[], late_checkin?: string, description?: string, option_id: string},
}
