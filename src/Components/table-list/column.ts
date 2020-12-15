import {ReactNode} from "react";

export type column_type<T> = {
  index: keyof T;
  render?: (row: T) => ReactNode;
}
