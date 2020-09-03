import {ACCEPT_SEARCH_FORM, AcceptSearchFormType} from './search.actions.types';

export function AcceptSearchForm(): AcceptSearchFormType {
  return {
    type: ACCEPT_SEARCH_FORM,
    payload: undefined,
  };
}
