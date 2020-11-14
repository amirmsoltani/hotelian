import {NavigationState, Route} from '@react-navigation/native';

export const SET_NAVIGATION_STATE = '[Navigation Reducer] Set Navigation State';
type SetNavigationStateType = {type: typeof SET_NAVIGATION_STATE, payload: NavigationState & {current: Route<string>}}

export function SetNavigationState(state: NavigationState): SetNavigationStateType {
  const {routes, index} = <NavigationState>state.routes[state.index].state;
  return {type: SET_NAVIGATION_STATE, payload: {...state, current: routes[index]}};
}
