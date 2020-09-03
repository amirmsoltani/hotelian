import {HotelInterface} from '../../Typescript';

const boardTypesRegex = /all\sinclusive|half\sboard|full\sboard|breakfast|room\sonly/;

function boardTypeInitial(hotels: HotelInterface[]) {
  const boardTypes: string[] =
    (hotel.board_types ? hotel.board_types.join("") : hotel.board_type)
      .toLocaleLowerCase()
      .match(this.boardType_regex) || [];
  let other = 0;
  boardTypes.forEach((boardType: string) => {
    if (this.parent.boardTypes[boardType]) {
      if (!this.parent.boardTypes[boardType].includes(hotel.i))
        this.parent.boardTypes[boardType].push(hotel.i);
    } else this.parent.boardTypes[boardType] = [hotel.i];
    other++;
  });
  if ((other === 0 && hotel.board_type) || (hotel.board_types && other < hotel.board_types.length))
    Serializers.addOrPush(this.parent.boardTypes, "other", hotel.i);
}

export default function(hotels: HotelInterface[]) {
  hotels.forEach(hotel=>{

  })
  return {
    board_types:,
  };
}

