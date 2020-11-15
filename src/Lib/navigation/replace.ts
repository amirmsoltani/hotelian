import {StackActions} from '@react-navigation/native';
import {navigationConfig} from './config';

export function replace(name: string, params?: object | undefined): void {
  navigationConfig.dispatch(
    StackActions.replace(name, params),
  );
}
