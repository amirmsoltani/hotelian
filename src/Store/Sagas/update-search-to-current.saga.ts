import {select, put, takeLatest, take, delay} from 'redux-saga/effects';
import {RootStateInterface} from 'Typescript/Interfaces';
import {AcceptSearchForm, SET_NAVIGATION_STATE, SET_SEARCH_ID} from '../Actions';
import {
  UPDATE_SEARCH_TO_CURRENT,
} from '../Actions/global.actions/update-search-to-current.action';
import {ChangeSearchData} from '../Actions/search.actions';
import {GetHotelRooms} from '../Actions/hotel.actions';
import {globalStore} from '../index';
import {setStatus} from '../Actions/global.actions/set-status.action';
import {commonActions} from '../../Lib/navigation';

function* UpdateSearchToCurrent() {
  let route_name = yield select((state: RootStateInterface) => state.navigation.current.name);
  while (!['select-room', 'hotels'].includes(route_name)) {
    commonActions.goBack();
    const mamooti = (yield take(SET_NAVIGATION_STATE)) as any;
    route_name = mamooti.payload.current.name;
  }
  yield delay(1000);
  switch (route_name) {
    case 'hotels':
      yield put(AcceptSearchForm());
      break;
    case 'select-room': {
      yield put(setStatus('rooms', 'loading'));
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
  }
}

export default takeLatest(UPDATE_SEARCH_TO_CURRENT, UpdateSearchToCurrent);
