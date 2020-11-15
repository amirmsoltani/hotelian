import {NavigationState, Route} from '@react-navigation/native';
import {navigationActionsType, SET_NAVIGATION_STATE} from '../Actions';

export const routeInit = {};

const NavigationReducer = (state: NavigationState & {current: Route<any>} | object = {}, action: navigationActionsType): typeof state => {
  switch (action.type) {
    case SET_NAVIGATION_STATE:
      return action.payload;
    default:
      return state;
  }
};


export default NavigationReducer;
