export interface AppStateInterface {
  currency: string;
  language: string;
  rtl: boolean;
  locales: Array<{ lang: string, dir: 'rtl' | 'ltr', label: string }>;
  today: { unix: number, datetime: string };
  track_code: string;
  json?: { [key: string]: string }
  token?: string;
}
