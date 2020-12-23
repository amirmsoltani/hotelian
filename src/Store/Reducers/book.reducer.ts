import {BookStateInterface} from 'Typescript/Interfaces';
import {
  BookActionsType,
  CONFIRM_RESERVE_DATA,
  GET_CONFIRM_DATA,
  PASSENGER_SAVE,
  SET_RESERVE_ID,
} from '../Actions/book.actions';
import {SET_STATUS} from '../Actions/global.actions/set-status.action';

export const bookInit: BookStateInterface = {
  confirm: {
    confirm_s: undefined,
  },
};

function bookReducer(state: BookStateInterface = bookInit, action: BookActionsType): BookStateInterface {
  switch (action.type) {
    case PASSENGER_SAVE: {
      return {
        ...state,
        passenger: action.payload,
      };
    }
    case CONFIRM_RESERVE_DATA:
      return {
        ...state,
        passenger: {...state.passenger!, status: 'loading'},
      };
    case SET_RESERVE_ID:
      return {
        ...state,
        passenger: {
          ...state.passenger!,
          status: 'ok',
          reserve_id: action.payload,
        },
      };
    case GET_CONFIRM_DATA:
      return {
        ...state,
        confirm: { ...action.payload, confirm_s: 'ok'},
      };

    case SET_STATUS:
      switch (action.target) {
        case GET_CONFIRM_DATA:
          return {...state, confirm: {...state.confirm, confirm_s: action.status}};
      }
    default:
      return state;
  }
}

export default bookReducer;
