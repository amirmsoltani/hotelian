import {BoardTypeType, HotelOptionInterface, OptionFilterInterface} from 'Typescript';
import {translate} from 'Lib/Languages';

class OptionInitial {
  protected boardTypes: BoardTypeType;
  protected prices: {[key: string]: number[]};
  public hotelsIndex: number[] = [];
  static readonly boardType_regex = /all\sinclusive|half\sboard|full\sboard|breakfast|room\sonly/g;
  static readonly convertToBoardType: { [key in string]: keyof BoardTypeType } = {
    'all inclusive': 'allInclusive',
    'half board': 'halfBoard',
    'full board': 'fullBoard',
    'breakfast': 'breakfast',
    'room only': 'roomOnly',
  };

  constructor(protected options: HotelOptionInterface[]) {
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
      if (!this.boardTypes[name]!.includes(index)) {
        this.boardTypes[name]!.push(index);
      }
    } else {
      this.boardTypes[name] = [index];
    }
  }

  /**
   * if board types includes in list added index to boardTypes->(all except other)  else added into boardTypes->other;
   * @param option:HotelInterface option object;
   * @param index:number index hotel in original array;
   */
  protected boardType(option: HotelOptionInterface, index: number) {
    const boardTypes: string[] =
      option.board_type.toLocaleLowerCase().match(OptionInitial.boardType_regex) || [];
    boardTypes.forEach(boardType => {
      this.setBoardType(index, OptionInitial.convertToBoardType[boardType]);
    });
    if (boardTypes.length < 1) {
      this.setBoardType(index, 'other');
    }
  }

  /**
   * hotels price split with length / 5
   * @param option:HotelInterface hotel process
   * @param index:number index hotel in original array
   */
  protected price(option: HotelOptionInterface, index: number) {
    const total = Math.floor(option.price.total);
    if (total.toString() in this.prices) {
      this.prices[total.toString()].push(index);
    } else {
      this.prices[total.toString()] = [index];
    }
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
    this.options.forEach((option, index) => {
      this.boardType(option, index);
      this.price(option, index);
      this.hotelsIndex.push(index);
    });
    this.rangePrice();
  }

  /**
   * return all filter structure
   */
  get structure(): OptionFilterInterface {
    return {
      boardTypes: this.boardTypes,
      rangePrice: this.prices,
    };
  }
}


export default OptionInitial;
