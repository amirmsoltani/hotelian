import {NativeModules} from 'react-native';


export const getMacId = (): Promise<string> => {
  return new Promise<string>(resolve => {
    NativeModules.Timer.getMacId(resolve);
  });
};
