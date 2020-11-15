import {Route, NavigationState} from '@react-navigation/native';

export interface NavigationStateInterface extends NavigationState {
  current: Route<any>
}
