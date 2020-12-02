import {HotelsFilterInterface} from '../Interfaces';

export type HotelsActivesFilterType = {
  [key in (
    keyof HotelsFilterInterface['stars'] |
    keyof HotelsFilterInterface['boardTypes'] |
    keyof HotelsFilterInterface['locations'] |
    keyof HotelsFilterInterface['rangePrice'] |
    keyof HotelsFilterInterface['sort'] |
    keyof HotelsFilterInterface['other'] |
    'search'
    )]
  : {name: keyof HotelsFilterInterface, indexes: number[]}
}
