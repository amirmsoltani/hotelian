import {Room} from 'Forms/guest-form/guest-from-type';
import {GatewayType, InvoiceType, StatusType, userType} from '../Types';


export interface BookStateInterface {
  passenger?: {rooms: Room[], late_checkin?: string, description?: string, option_id: string, status?: StatusType, reserve_id?: number},
  confirm: {confirm_s: StatusType, gateways?: GatewayType[], invoice?: InvoiceType,user?:userType};
}
