import {SearchFormDataInterface} from '../../../Typescript';
import {CHANGE_SEARCH_FORM_DATA, ChangeSearchFormDataType} from './search.actions.types';

/**
 * this action for change search from data in searchReducer.
 * you can send all data or one param.
 * if send one param not change other data.
 * @param searchData : SearchFormDataInterface
 * @constructor
 */
export function ChangeSearchData(searchData: SearchFormDataInterface): ChangeSearchFormDataType {
  return {
    type: CHANGE_SEARCH_FORM_DATA,
    payload: searchData,
  };
}
