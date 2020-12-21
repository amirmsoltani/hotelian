import {put, take, takeLatest, select} from 'redux-saga/effects';
import {CONFIRM_RESERVE_DATA, ConfirmReserveDataType, setReserveId} from '../Actions/book.actions';
import {RootStateInterface} from 'Typescript/Interfaces';
import {navigationConfig} from 'Lib/navigation';
import {USER_LOGIN, UserLoginType} from '../Actions/user.actions';
import {VERIFY_EMAIL_BY_CODE} from '../Actions/user.actions/verify-email-by-code.action';
import Http from 'Lib/Http';
import {SET_PASSENGERS} from 'URLS';
import {error_handler} from 'Lib/error-handler';


function* confirmReserveData(action: ConfirmReserveDataType) {
  let {passengers, user, hotel_id, search_id}: {
    passengers: RootStateInterface['bookReducer']['passenger'],
    user: RootStateInterface['userReducer'],
    hotel_id: string,
    search_id: string
  } = yield select((state: RootStateInterface) => ({
    passengers: state.bookReducer.passenger,
    user: state.userReducer,
    hotel_id: state.hotelReducer.hotel.result!.hotel.id,
    search_id: state.searchReducer.search_id,
  }));
  if (user.status !== 'ok') {
    navigationConfig.navigate('auth');
    user.user = ((yield take(USER_LOGIN)) as UserLoginType).payload.user;
  }
  if (user.user!.is_email_verified === false) {
    navigationConfig.navigate('email-verify');
    yield take(VERIFY_EMAIL_BY_CODE);
  }
  try {
    const response = yield Http.request({
      url: SET_PASSENGERS, method: 'POST', data: {
        search_id,
        description: passengers!.description!,
        hotel_id,
        late_checkin: passengers!.late_checkin!,
        option_id: passengers!.option_id!,
        rooms: passengers!.rooms!.map(room => ({
          adults: room.persons.filter(r => r.gender).map(r => ({
            first_name: r.first_name,
            last_name: r.last_name,
            title: r.gender === 'male' ? 'MR' : 'MS',
          })),
          children: room.persons.filter(r => r.age).map(r => ({
            first_name: r.first_name,
            last_name: r.last_name,
            age: r.age,
          })),
          room_name: room.room_name,
          room_id: room.room_id,
        })),
      },
    });
    yield put(setReserveId(response.data.result.reserve_id));
    navigationConfig.navigate('confirm');
  } catch (e) {
    yield put(yield error_handler({error: e, canClose: true, action: action}));
  }

}


export default takeLatest(CONFIRM_RESERVE_DATA, confirmReserveData);
