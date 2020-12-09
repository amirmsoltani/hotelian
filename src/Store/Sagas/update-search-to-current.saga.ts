import {select, put, takeLatest, take} from 'redux-saga/effects';
import {RootStateInterface} from 'Typescript/Interfaces';
import {AcceptSearchForm, SET_SEARCH_ID} from '../Actions';
import {
  UPDATE_SEARCH_TO_CURRENT,
} from '../Actions/global.actions/update-search-to-current.action';
import {ChangeSearchData} from '../Actions/search.actions';
import {GetHotelRooms} from '../Actions/hotel.actions';
import {globalStore} from '../index';
import {commonActions} from '../../Lib/navigation';
import {setStatus} from '../Actions/global.actions/set-status.action';


function* UpdateSearchToCurrent() {
  const route_name = yield select((state: RootStateInterface) => state.navigation.current.name);
  if (route_name === 'passenger') {
    commonActions.goBack();
    yield put(setStatus('rooms', 'loading'));
  }
  switch (route_name) {
    case 'hotels':
      yield put(AcceptSearchForm());
      break;
    case 'select-room':
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
    }
  }
}

export default takeLatest(UPDATE_SEARCH_TO_CURRENT, UpdateSearchToCurrent);
