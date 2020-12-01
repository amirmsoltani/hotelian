import {StatusType} from '../Types';
import {AppErrorInterface} from './app-error.interface';

export interface AppStateInterface {
  currency: string;
  language: string;
  rtl: boolean;
  locales: Array<{lang: string, dir: 'rtl' | 'ltr', label: string}>;
  currencies: Array<{code: string, label: string}>;
  today: {unix: number, datetime: string};
  track_code: string;
  json?: {[key: string]: string}
  token?: string;
  status: StatusType;
  message?: string;
  errors?: AppErrorInterface;
}
