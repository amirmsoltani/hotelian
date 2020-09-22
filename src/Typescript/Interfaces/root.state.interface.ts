import {SearchStateInterface} from './search.state.interface';
import {AppStateInterface} from './app-state.interface';
import {HotelsStateInterface} from './hotels-state.interface';
import {Location, Action} from 'history';

export interface RootStateInterface {
  router: {action: Action, location: Location}
  searchReducer: SearchStateInterface;
  appReducer: AppStateInterface;
  hotelsReducer: HotelsStateInterface
}
