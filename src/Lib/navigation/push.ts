import {StackActions} from '@react-navigation/native';
import {navigationConfig} from './config';

export function push(name: string, params?: object | undefined): void {
  navigationConfig.dispatch(
    StackActions.push(name, params),
  );
}
