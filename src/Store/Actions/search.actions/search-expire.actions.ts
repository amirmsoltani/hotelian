import {SEARCH_EXPIRE, SearchExpireType} from './search.actions.types';

export function SearchExpire(): SearchExpireType {
  return {
    type: SEARCH_EXPIRE,
  };
}
