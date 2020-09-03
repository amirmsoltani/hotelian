import {BoardTypeType, HotelInterface} from '../../../Typescript';

const boardTypesRegex = /all\sinclusive|half\sboard|full\sboard|breakfast|room\sonly/;

function getBoardType(hotels: HotelInterface[]) {

  let other = 0;
  boardTypes.forEach((boardType: string) => {
    if (this.parent.boardTypes[boardType]) {
      if (!this.parent.boardTypes[boardType].includes(hotel.i))
        this.parent.boardTypes[boardType].push(hotel.i);
    } else this.parent.boardTypes[boardType] = [hotel.i];
    other++;
  });
  if ((other === 0 && hotel.board_type) || (hotel.board_types && other < hotel.board_types.length))
    Serializers.addOrPush(this.parent.boardTypes, 'other', hotel.i);
}


/*  const boardType : BoardTypeType = {};
  hotels.forEach(hotel=>{
    boardType
  })
  return {
    board_types:,
  };
}*/
class HotelsInitial {
  boardTypes: BoardTypeType;
  static readonly boardType_regex = /all\sinclusive|half\sboard|full\sboard|breakfast|room\sonly/;

  protected setBoardType(name: keyof BoardTypeType, array: number) {
    if (name in this.boardType)
      this.boardTypes[name]!.push(array);
    else
      this.boardTypes[name] = [array];
  }

  boardType(hotel: HotelInterface) {
    let other = false;
    const boardTypes: string[] =
      hotel.board_types.join('').toLocaleLowerCase().match(HotelsInitial.boardType_regex) || [];
  }

  constructor(protected hotels: HotelInterface[]) {
    this.boardTypes = {};
  }
}

export default HotelsInitial;
