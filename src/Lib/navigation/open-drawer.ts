import {DrawerActions} from '@react-navigation/native';
import {navigationConfig} from './config';


export function openDrawer(): void {
  navigationConfig.dispatch(
    DrawerActions.openDrawer(),
  );
}
