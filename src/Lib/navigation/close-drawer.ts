import {DrawerActions} from '@react-navigation/native';
import {navigationConfig} from './config';


export function closeDrawer(): void {
  navigationConfig.dispatch(
    DrawerActions.closeDrawer(),
  );
}
