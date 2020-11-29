import {InputStateType, RoomType} from '../../Typescript/Types';

export type FieldState = {first_name: InputStateType, last_name: InputStateType, gender: InputStateType};

export type RoomData = {age?: number, gender?: 'male' | 'female', first_name?: string, last_name?: string}
export type Room = {room_name: string, room_id: string, adults: number, child: number, persons: Array<RoomData & {field_state: FieldState}>};

export type LateCheckin = {active: boolean, date_time?: string, description: string, state: InputStateType};

export type StateType = {rooms: Room[], lateCheckin: LateCheckin};

export type PropTypes = {rooms: RoomType[]}
