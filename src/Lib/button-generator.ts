import {navigationConfig} from './navigation/config';
import {globalStore} from '../Store';
import {ThemeType} from '../Typescript/Types';
import {AppClearError as ClearError} from '../Store/Actions/app.actions';
import {commonActions} from './navigation';
import {translate} from './Languages';

const close = () => {
  globalStore.dispatch(ClearError());
  if (navigationConfig.canGoBack()) {
    commonActions.goBack();
  }
};
export const buttonGenerator = (): { label: string, theme: ThemeType, click: () => void }[] => {
  const route = globalStore.getState().navigation.current?.name;
  switch (route) {
    default:
      return [{theme: 'primary', label: translate('close'), click: close}];
  }
};

export default close;
