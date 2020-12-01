import {NavigationState, Route} from '@react-navigation/native';

export const SET_NAVIGATION_STATE = '[Navigation Reducer] Set Navigation State';
type SetNavigationStateType = {type: typeof SET_NAVIGATION_STATE, payload: NavigationState & {current: Route<string>} | object}

const get_lat_state = (state: NavigationState): NavigationState | Route<string> => {
  const newState = state.routes[state.index];
  return 'state' in newState ? get_lat_state(newState.state as NavigationState) : newState;
};

export function SetNavigationState(state: NavigationState | undefined): SetNavigationStateType {
  if (state === undefined) {
    return {type: SET_NAVIGATION_STATE, payload: {}};
  }
  return {type: SET_NAVIGATION_STATE, payload: {...state, current: get_lat_state(state)}};
}

export type navigationActionsType = SetNavigationStateType
