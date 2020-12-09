import {select, put, takeLatest, delay, take} from 'redux-saga/effects';
import {HotelOptionInterface, RootStateInterface} from 'Typescript/Interfaces';
import {AcceptSearchForm, SET_SEARCH_ID} from '../Actions';
import {
  UPDATE_SEARCH_TO_CURRENT,
  UpdateSearchToCurrentType,
} from '../Actions/global.actions/update-search-to-current.action';
import {ChangeSearchData} from '../Actions/search.actions';
import {GetHotelRooms} from '../Actions/hotel.actions';
import {globalStore} from '../index';
import {stackActions} from '../../Lib/navigation';


function* UpdateSearchToCurrent(action: UpdateSearchToCurrentType) {
  const route_name = yield select((state: RootStateInterface) => state.navigation.current.name);
  switch (route_name) {
    case 'hotels':
      yield put(AcceptSearchForm());
      break;
    case 'select-room': {
      const {id, name, city, country} = yield select((state: RootStateInterface) => ({
        id: state.hotelReducer.hotel.result!.hotel.id,
        name: state.hotelReducer.hotel.result!.hotel.name,
        city: state.hotelReducer.hotel.result!.hotel.city,
        country: state.hotelReducer.hotel.result!.hotel.country,
      }));
      yield put(ChangeSearchData({
        destination: {
          dest_code: id,
          dest_type: 'hotel',
          label: name,
          text: `${city}, ${country}`,
        },
      }));
      yield put(AcceptSearchForm());
      const search_id: string = (yield take(SET_SEARCH_ID)).payload.search_id;
      yield GetHotelRooms({search_id, hotel_id: id})(globalStore.dispatch);
    }
    case 'passenger': {
      const {id, name, city, country} = yield select((state: RootStateInterface) => ({
        id: state.hotelReducer.hotel.result!.hotel.id,
        name: state.hotelReducer.hotel.result!.hotel.name,
        city: state.hotelReducer.hotel.result!.hotel.city,
        country: state.hotelReducer.hotel.result!.hotel.country,
      }));
      yield put(ChangeSearchData({
        destination: {
          dest_code: id,
          dest_type: 'hotel',
          label: name,
          text: `${city}, ${country}`,
        },
      }));
      yield put(AcceptSearchForm());
      const search_id: string = (yield take(SET_SEARCH_ID)).payload.search_id;
      yield GetHotelRooms({search_id, hotel_id: id})(globalStore.dispatch);
      stackActions.pop(1);
    }
  }
}

export default takeLatest(UPDATE_SEARCH_TO_CURRENT, UpdateSearchToCurrent);
