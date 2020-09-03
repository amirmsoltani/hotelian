export interface Day {
  text: string | number;
  time: number;
}

export interface Month {
  time: number;
  name: string;
  days: Day[];
}


export type DateType = {formatted: string, value: string};
