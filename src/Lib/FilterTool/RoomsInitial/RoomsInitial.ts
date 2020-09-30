import {
  BoardTypeType,
  HotelOptionInterface,
  RoomFilterInterface,
} from 'Typescript';
import {translate} from '../../Languages';


class RoomsInitial {
  protected boardTypes: BoardTypeType;
  protected prices: {[key: string]: number[]};
  public roomsIndex: number[] = [];
  static readonly boardType_regex = /all\sinclusive|half\sboard|full\sboard|breakfast|room\sonly/g;
  static readonly convertToBoardType: { [key in string]: keyof BoardTypeType } = {
    'all inclusive': 'allInclusive',
    'half board': 'halfBoard',
    'full board': 'fullBoard',
    'breakfast': 'breakfast',
    'room only': 'roomOnly',
  };

  constructor(protected rooms: HotelOptionInterface[]) {
    this.boardTypes = {};
    this.prices = {};
  }

  /**
   * Index assignor to board type structure
   * @param index hotel index in original array
   * @param name if filter multi subcategory category name
   */
  protected setBoardType(index: number, name: keyof BoardTypeType) {
    if (name in this.boardTypes) {
      if (!this.boardTypes[name]!.includes(index))
        this.boardTypes[name]!.push(index);
    } else
      this.boardTypes[name] = [index];
  }

  /**
   * if board types includes in list added index to boardTypes->(all except other)  else added into boardTypes->other;
   * @param hotel:HotelInterface hotel object;
   * @param index:number index hotel in original array;
   */
  protected boardType(room: HotelOptionInterface, index: number) {
    const boardTypes: string[] =
      room.board_type.toLocaleLowerCase().match(RoomsInitial.boardType_regex) || ['other'];
    this.setBoardType(index, RoomsInitial.convertToBoardType[boardTypes[0]]);

  }


  /**
   * hotels price split with length / 5
   * @param hotel:HotelInterface hotel process
   * @param index:number index hotel in original array
   */
  protected price(hotel: HotelOptionInterface, index: number) {
    const total = Math.floor(hotel.price.total);
    if (total.toString() in this.prices)
      this.prices[total.toString()].push(index);
    else
      this.prices[total.toString()] = [index];
  }

  protected rangePrice() {
    const prices = {...this.prices};
    this.prices = {};
    const keys = Object.keys(prices);
    const values = Object.values(prices);
    const step = Math.floor(keys.length / 5);
    const mod = keys.length % 5;
    for (let i = 0; i < 5; i++) {
      const stepName = `${keys[i * step]} ${translate('to')} ${keys[(i + 1) * step]}`;
      this.prices[stepName] = [];
      values.slice(i * step, (i + 1) * step + (i + 1 === 5 ? mod : 0)).forEach(value => {
        this.prices[stepName].push(...value);
      });
    }
  }

  /**
   * process all hotels for create filter structure
   */
  public initial() {
    this.rooms.forEach((room, index) => {
      this.boardType(room, index);
      this.price(room, index);
      this.roomsIndex.push(index);
    });
    this.rangePrice();
    // TODO test here
  }

  /**
   * return all filter structure
   */
  get structure(): RoomFilterInterface {
    return {
      boardTypes: this.boardTypes,
      rangePrice: this.prices,
    };
  }
}

export default HotelsInitial;
