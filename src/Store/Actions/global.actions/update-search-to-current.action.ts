export const UPDATE_SEARCH_TO_CURRENT = '[Global Action] Update Search To Current';
export type UpdateSearchToCurrentType = {type: typeof UPDATE_SEARCH_TO_CURRENT, payload?: {[key: string]: any}}
export const updateSearchToCurrent = (payload?: {[key: string]: any}): UpdateSearchToCurrentType => ({
  type: UPDATE_SEARCH_TO_CURRENT,
  payload,
});



