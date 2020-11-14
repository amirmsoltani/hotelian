import {NavigationProp} from '@react-navigation/core/lib/typescript/src/types';


export let navigationConfig: NavigationProp<any>;

export function setNavigation(navigation: typeof navigationConfig) {
  navigationConfig = navigation;
}
