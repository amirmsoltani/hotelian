import {AUTO_COMPLETE_ERROR, AutoCompleteErrorType} from './search.actions.types';

export function autoCompleteError(target: 'nationality' | 'destination'): AutoCompleteErrorType {
  return {
    type: AUTO_COMPLETE_ERROR,
    target: target,
  };
}
