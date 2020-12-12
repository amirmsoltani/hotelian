import {HotelsFilterInterface} from '../Interfaces';

type Str = {
  [key in keyof Required<HotelsFilterInterface[keyof HotelsFilterInterface]>]?: {name: keyof HotelsFilterInterface, indexes: number[]}
};

export type HotelsActivesFilterType = Str & {search?: {name: keyof HotelsFilterInterface, indexes: number[]}};
