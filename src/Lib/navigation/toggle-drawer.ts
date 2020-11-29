import {DrawerActions} from '@react-navigation/native';
import {navigationConfig} from './config';


export function toggleDrawer(): void {
  navigationConfig.dispatch(
    DrawerActions.toggleDrawer(),
  );
}
