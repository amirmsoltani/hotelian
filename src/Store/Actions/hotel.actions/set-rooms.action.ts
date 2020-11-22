import {SET_HOTELS_ROOMS, SetHotelRoomType} from './hotel-actions.type';
import {RoomsDetailsInterface} from 'Typescript/Interfaces';
import OptionInitial from 'Lib/FilterTool/OptionInitial/OptionInitial';

export const SetHotelRooms = (rooms: RoomsDetailsInterface, restructure = true): SetHotelRoomType => {
  if (!restructure)
    {return {
      type: SET_HOTELS_ROOMS,
      payload: {...rooms},
    };}
  const structureCreator = new OptionInitial(rooms.options);
  structureCreator.initial();

  return {
    type: SET_HOTELS_ROOMS,
    payload: {
      ...rooms,
      filter: {
        hotels: structureCreator.hotelsIndex,
        structure: structureCreator.structure,
      },
    },
  };
};


