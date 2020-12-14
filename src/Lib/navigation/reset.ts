import {navigationConfig} from './config';
import {PartialState, NavigationState, CommonActions} from '@react-navigation/native';


export const reset = (state: PartialState<NavigationState> | NavigationState) => {
  navigationConfig.dispatch(CommonActions.reset(state));
};

