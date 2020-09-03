import {SearchStateInterface} from './search.state.interface';
import {UserStateInterface} from './user-state.interface';
import {HotelsStateInterface} from './hotels-state.interface';
import {Location, Action} from 'history';

export interface RootStateInterface {
  router: {action: Action, location: Location}
  searchReducer: SearchStateInterface;
  userReducer: UserStateInterface;
  hotelsReducer: HotelsStateInterface
}
