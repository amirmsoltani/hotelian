import {StackActions} from '@react-navigation/native';
import {navigationConfig} from './config';

export function pop(count: number = 1): void {
  navigationConfig.dispatch(
    StackActions.pop(count),
  );
}
