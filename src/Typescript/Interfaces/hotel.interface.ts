import {PriceType} from '../Types';

export interface HotelInterface  {
  hotel_id: number;
  address: string;
  board_types: string[];
  discount: number | null;
  image: string;
  lat: string;
  lng: string;
  link: string;
  location: string;
  name: string;
  price: PriceType;
  star: number;
  room: {breakfast: boolean},
}
