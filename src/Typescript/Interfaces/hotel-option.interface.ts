import {PriceType, RoomType} from '../Types';
import {CancellationPolicyInterface} from './cancellation-policy.interface';

export interface HotelOptionInterface {
  option_id: string;
  board_type: string;
  deal_name: null | string;
  on_request: boolean;
  price: PriceType;
  discount: number;
  rooms: RoomType[];
  cancellation?: CancellationPolicyInterface | null;
}
