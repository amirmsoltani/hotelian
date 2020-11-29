import {BookStateInterface} from '../../Typescript/Interfaces';
import {BookActionsType, PASSENGER_SAVE} from '../Actions/book.actions';

export const bookInit: BookStateInterface = {};

function bookReducer(state: BookStateInterface = bookInit, action: BookActionsType): BookStateInterface {
  switch (action.type) {
    case PASSENGER_SAVE: {
      return {
        ...state,
        passenger: action.payload,
      };
    }
    default:
      return state;
  }
}

export default bookReducer;
