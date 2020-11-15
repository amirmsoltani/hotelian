import {CommonActions} from '@react-navigation/native';
import {navigationConfig} from './config';

export function navigate(stack: string, screen: string, params?: object): void {
  navigationConfig.dispatch(
    CommonActions.navigate(stack, {params, screen}));
}
