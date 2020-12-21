import {StatusType} from './status.type';

export type userType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  mobile_number?: string;
  title?: number;
  city?: string;
  lang?: string;
  credit?: number;
  credit_currency?: string;
  pref_currency?: string;
  perf_currency_amount?: number;
  is_mobile_verified?: boolean;
  is_email_verified?: StatusType | boolean;
  profile_pic?: string;
  currency?: string
}
