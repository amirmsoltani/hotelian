import {navigationConfig} from './navigation/config';
import {globalStore} from '../Store';
import {ThemeType} from '../Typescript/Types';
import {AppClearError as ClearError} from '../Store/Actions/app.actions';
import {translate} from './Languages';
import {GetHotel, GetHotelRooms} from '../Store/Actions/hotel.actions';

const close = () => {
  globalStore.dispatch(ClearError());
  if (navigationConfig.canGoBack()) {
    navigationConfig.goBack();
  }
};

export const buttonGenerator = (): {label: string, theme: ThemeType, click: () => void}[] => {
  const route = globalStore.getState().navigation.current?.name;
  const action = globalStore.getState().appReducer.errors?.action;
  switch (route) {
    case 'hotel': {

      return [{theme: 'primary', label: translate('close-and-back'), click: close},
        {
          theme: 'success',
          label: translate('try-again'),
          click: () => {
            globalStore.dispatch(ClearError());
            GetHotel(action!.id)(globalStore.dispatch);
          },
        }];
    }
    case 'select-room': {
      return [{theme: 'primary', label: translate('close-and-back'), click: close},
        {
          theme: 'success',
          label: translate('try-again'),
          click: () => {
            globalStore.dispatch(ClearError());
            GetHotelRooms({search_id: action!.search_id, hotel_id: action!.hotel_id})(globalStore.dispatch);
          },
        },
      ];
    }
    case 'hotels': {
      return [
        {theme: 'primary', label: translate('close-and-back'), click: close},
        {
          theme: 'success',
          label: translate('try-again'),
          click: () => {
            globalStore.dispatch(ClearError());
            globalStore.dispatch(action!);
          },
        },
      ];
    }

    default:
      return [{theme: 'primary', label: translate('close'), click: close}];
  }
};

export default close;
