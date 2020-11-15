import {CommonActions} from '@react-navigation/native';
import {navigationConfig} from './config';

export function goBack(): void {
  navigationConfig.dispatch(
    CommonActions.goBack(),
  );
}
