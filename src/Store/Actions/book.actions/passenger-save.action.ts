import {PASSENGER_SAVE, PassengerSaveType} from './book-actions.type';
import {StateType} from 'Forms/guest-form/guest-from-type';

export const PassengerSave = (state: StateType): PassengerSaveType => {
  return {
    type: PASSENGER_SAVE,
    payload: {
      rooms: state.rooms,
      description: state.lateCheckin.description,
      late_checkin: state.lateCheckin.date_time,
    },
  };
};
