import {put, takeLatest} from 'redux-saga/effects';
import {GetHotelRoomsType, SetHotelRooms, GET_HOTELS_ROOMS} from '../Actions/hotel.actions';
import Http from 'Lib/Http';
import {CancellationPolicyInterface, HttpResponseInterface, RoomsDetailsInterface} from 'Typescript/Interfaces';
import {CANCELLATION_POLICY} from 'URLS';

export function* GetRooms(action: GetHotelRoomsType) {
  try {
    const roomsResponse: HttpResponseInterface<RoomsDetailsInterface> = yield  Http.request({
      url: action.url,
      method: 'GET',
    });
    const ids = roomsResponse.data.result.options.map(room => room.option_id);
    const policyResponse: HttpResponseInterface<{ [key in typeof roomsResponse['data']['result']['options'][number]['option_id']]: CancellationPolicyInterface }> = yield Http.request({
      url: CANCELLATION_POLICY,
      method: 'POST',
      data: {option_id: ids, hotel_id: action.hotel_id, search_id: action.search_id},
    });
    roomsResponse.data.result.options.forEach((option) => {
      option.cancellation = policyResponse.data.result[option.option_id];
    });
    yield put(SetHotelRooms(roomsResponse.data.result));
  } catch (error) {
    console.error(error);
  }
}

export default takeLatest(GET_HOTELS_ROOMS, GetRooms);
