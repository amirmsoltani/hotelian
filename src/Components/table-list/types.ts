import {ReactNode} from "react";

export type column_type<T> = {
  index: keyof T;
  label?: string;
  render?: (row: T) => ReactNode;
}
export type status_type = 'loading' | 'error' | 'ok' | 'no-result' | 'no-result-by-filter';

export type filter_type<T> = {
  label: string;
  handler: (arg: T) => boolean;
};

export type search_type<T> = {
  index: keyof T,
  label_text?: string;
}
