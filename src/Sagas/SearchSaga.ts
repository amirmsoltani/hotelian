import {takeLatest, delay, put} from 'redux-saga/effects';
import axios from 'axios';
import {GetDestinationsType, GetNationalitiesType, SearchServerResponse} from 'src/Types/SearchTypes';
import {
  GET_DESTINATIONS_LIST, GET_NATIONALITIES_LIST,
  RESPONSE_ERROR,
  SET_DESTINATIONS_LIST,
  SET_NATIONALITIES_LIST,
} from '../Actions/TypesActions';
import {DESTINATIONS_URL, NATIONALITIES_URL} from '../URLS';

export function* getDestinations({payload: {debounce, search}}: GetDestinationsType) {
  yield delay(debounce);
  try {
    const response: SearchServerResponse = yield axios.get(`${DESTINATIONS_URL}?term=${search}`);
    const {data} = response;
    yield put({type: SET_DESTINATIONS_LIST, payload: data.result});
  } catch (error) {
    yield put({type: RESPONSE_ERROR, payload: error});
  }
}

export function* getNationalities({payload: {debounce, search}}: GetNationalitiesType) {
  yield delay(debounce);
  try {
    const response: SearchServerResponse = yield axios.get(`${NATIONALITIES_URL}?term=${search}`);
    const {data} = response;
    yield put({type: SET_NATIONALITIES_LIST, payload: data.result});
  } catch (error) {
    yield put({type: RESPONSE_ERROR, payload: error});
  }
}

export default [
  takeLatest(GET_DESTINATIONS_LIST, getDestinations),
  takeLatest(GET_NATIONALITIES_LIST, getNationalities),
];
