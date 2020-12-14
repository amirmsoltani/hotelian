import {NavigationContainerRef} from '@react-navigation/native';

export let navigationConfig: NavigationContainerRef;

export function setNavigation(navigation: typeof navigationConfig) {
  navigationConfig = navigation;
}
