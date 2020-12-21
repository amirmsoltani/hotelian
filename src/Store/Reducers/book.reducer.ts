import {BookStateInterface} from 'Typescript/Interfaces';
import {BookActionsType, CONFIRM_RESERVE_DATA, PASSENGER_SAVE, SET_RESERVE_ID} from '../Actions/book.actions';

export const bookInit: BookStateInterface = {};

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
    default:
      return state;
  }
}

export default bookReducer;
