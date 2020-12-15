import {SearchStateInterface} from './search.state.interface';
import {AppStateInterface} from './app-state.interface';
import {HotelsStateInterface} from './hotels-state.interface';
import {HotelStateInterface} from './hotel-state.interface';
import {NavigationStateInterface} from './navigation-state.interface';
import {BookStateInterface} from './book-state.interface';

export interface RootStateInterface {
  navigation: NavigationStateInterface;
  searchReducer: SearchStateInterface;
  appReducer: AppStateInterface;
  hotelsReducer: HotelsStateInterface;
  hotelReducer: HotelStateInterface;
  bookReducer: BookStateInterface;
}
