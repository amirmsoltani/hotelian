import React from 'react';
import {globalStore} from 'Store';
import {RoomType} from 'Typescript/Types';
import {translate} from 'Lib/Languages';
import {PassengerSave} from 'Store/Actions/book.actions';
import {FieldState, PropTypes, RoomData, StateType} from './guest-from-type';
import {commonActions} from '../../Lib/navigation';


function on_blur(this: GuestFromController, room: number, person: number, field_name: 'first_name' | 'last_name' | 'gender', data: string) {
  const field = this.state.rooms[room].persons[person];
  if ((/^([A-Z]|[a-z]){3,40}$/g).test(data)) {
    field.field_state[field_name].status = 'success';
    field.field_state[field_name].message = undefined;
    field[field_name] = data as 'male' | 'female';
  } else {
    field.field_state[field_name].status = 'error';
    field.field_state[field_name].message = translate('invalid-input-value');
  }
  this.setState({...this.state});
}


function on_focus(this: GuestFromController, room: number, person: number, field_name: 'first_name' | 'last_name' | 'gender') {
  this.state.rooms[room].persons[person].field_state[field_name].status = 'focused';
  this.setState({...this.state});
}


function on_switch(this: GuestFromController, status: boolean) {
  this.setState({lateCheckin: {...this.state.lateCheckin, active: status}});
}


function late_checkin_change(this: GuestFromController, name: 'date_time' | 'description', data: string) {
  this.setState({lateCheckin: {...this.state.lateCheckin, [name]: data}});
}

function on_submit(this: GuestFromController) {
  const error = this.state.rooms.find(room => room.persons.find(person => [
    person.field_state.last_name.status,
    person.field_state.first_name.status,
    person.field_state.gender.status,
  ].includes('error')));
  if (!error) {
    globalStore.dispatch(PassengerSave({
      rooms: this.state.rooms,
      lateCheckin: this.state.lateCheckin,
      option_id: this.props.option_id,
    }));
    commonActions.navigate('reserve', 'booking-overview');
  }
}

export const FormContext = React.createContext<{
  state: Readonly<StateType>,
  methods?: {
    focus:(room: number, person: number, field_name: 'first_name' | 'last_name' | 'gender') => void,
    blur: (room: number, person: number, field_name: 'first_name' | 'last_name' | 'gender', data: string) => void,
    switch: (status: boolean) => void,
    late_change: (name: 'date_time' | 'description', data: string) => void,
    submit: () => void,
  }
}>({
  state: {rooms: [], lateCheckin: {active: false, description: '', state: {}}},
});


class GuestFromController extends React.Component<PropTypes, StateType> {
  static contextType = FormContext;
  rooms: RoomType[];

  constructor(props: PropTypes) {
    super(props);
    this.rooms = props.rooms;
    this.state = {
      rooms: this.rooms.map(room => {
        const child_count = room.children ? room.children.length : 0;
        const newRoom = [...new Array(+room.adults + child_count)]
          .map((_, index) => {
            const filed: RoomData & {field_state: FieldState} = {
              field_state: {
                first_name: {},
                last_name: {},
                gender: {},
              },
            };
            if (index + 1 > room.adults) {
              filed.age = room.children[index - room.adults];
            } else {
              filed.gender = 'male';
            }
            return filed;
          });
        return {
          persons: newRoom,
          room_name: room.room_name!,
          room_id: room.room_id!,
          adults: +room.adults,
          child: child_count,
        };
      }),
      lateCheckin: {
        date_time: '1',
        description: '',
        state: {},
        active: false,
      },
    };

  }

  render() {
    return (
      <FormContext.Provider value={
        {
          methods: {
            blur: on_blur.bind(this),
            focus: on_focus.bind(this),
            switch: on_switch.bind(this),
            late_change: late_checkin_change.bind(this),
            submit: on_submit.bind(this),
          },
          state: this.state,
        }}>
        {this.props.children}
      </FormContext.Provider>);
  }
}


export default GuestFromController;
