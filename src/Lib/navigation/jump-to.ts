import {DrawerActions} from '@react-navigation/native';
import {navigationConfig} from './config';

export function jumpTo(name: string, params?: object | undefined): void {
  navigationConfig.dispatch(
    DrawerActions.jumpTo(name, params),
  );
}
