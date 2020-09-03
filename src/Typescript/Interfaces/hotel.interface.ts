import {PriceType} from 'src/Typescript/Types/price.type';

export type HotelType = {
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
