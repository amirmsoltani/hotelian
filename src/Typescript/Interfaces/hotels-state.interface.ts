import {HotelInterface} from 'src/Typescript';

export interface ResultStateInterface {
  hotels?: HotelInterface[];
  filtered_hotel?: number[];
  status?: 'ok' | 'loading' | 'expire' | 'error';
  filters?: object;
  active_filter?: object;
  search_id?: string;
}
