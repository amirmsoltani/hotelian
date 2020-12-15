import {PASSENGER_SAVE, PassengerSaveType} from './book-actions.type';
import {StateType} from 'Forms/guest-form/guest-from-type';

export const PassengerSave = (state: StateType): PassengerSaveType => {
  return {
    type: PASSENGER_SAVE,
    payload: {
      rooms: state.rooms,
      option_id: state.option_id!,
      description: state.lateCheckin.description,
      late_checkin: state.lateCheckin.date_time,
    },
  };
};
