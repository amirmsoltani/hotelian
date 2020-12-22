import {HotelType} from "./hotel.type";
import {CancellationPolicyInterface} from "../Interfaces";
import {PassengerType} from "./passenger.type";

export type BookingServiceType = {
  label: string;
  value: string;
}

export type BookingStatusType = {
  label: string;
  value: string;
}

export type BookingRoomType = {
  board_type: string;
  room_name: string;
  passengers: [];
}

export type BookingsType = {
  currency: string;
  date: string;
  hotel_name: string;
  price: string;
  reference: string;
  reserve_id: string;
  service_type: BookingServiceType;
  status: BookingStatusType;
}

export type BookingDetails = {
  hotel_reserve: {
    board_type: string;
    checkin: string;
    checkout: string;
    deadline: string;
    download_pdf: string;
    hotel: HotelType;
    hotel_image?: string;
    invoice_id: number;
    leader: string;
    reference: string;
    reserve_id: number;
    review_id?: number;
    rules: CancellationPolicyInterface;
    rooms: PassengerType[];
    status: BookingStatusType;
  }
}
