import {BoardTypeType, HotelInterface, HotelsFilterInterface, SortType, StarsRatingType} from 'Typescript';
import Union from '../Union';
import {translate} from '../../Languages';


class HotelsInitial {
  protected boardTypes: BoardTypeType;
  protected stars: StarsRatingType;
  protected locations: {[key: string]: number[]};
  protected prices: {[key: string]: number[]};
  protected sorting: SortType;
  public hotelsIndex: number[] = [];
  static readonly boardType_regex = /all\sinclusive|half\sboard|full\sboard|breakfast|room\sonly/g;
  static readonly convertToBoardType: { [key in string]: keyof BoardTypeType } = {
    'all inclusive': 'allInclusive',
    'half board': 'halfBoard',
    'full board': 'fullBoard',
    'breakfast': 'breakfast',
    'room only': 'roomOnly',
  };

  constructor(protected hotels: HotelInterface[]) {
    this.boardTypes = {};
    this.stars = {};
    this.locations = {};
    this.prices = {};
    this.sorting = {'priceUp': [], 'priceDown': [], 'starUp': [], 'starDown': []};
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
  protected boardType(hotel: HotelInterface, index: number) {
    const boardTypes: string[] =
      hotel.board_types.join('').toLocaleLowerCase().match(HotelsInitial.boardType_regex) || [];
    boardTypes.forEach(boardType => {
      this.setBoardType(index, HotelsInitial.convertToBoardType[boardType]);
    });
    if ((boardTypes.length === 0 && hotel.board_types.length) || boardTypes.length < hotel.board_types.length)
      this.setBoardType(index, 'other');
  }

  /**
   * hotels start Grouping together
   * @param hotel:HotelInterface hotel process
   * @param index:number index hotel in original array
   */
  protected star(hotel: HotelInterface, index: number) {
    if (hotel.star in this.stars)
      this.stars[hotel.star]!.push(index);
    else
      this.stars[hotel.star] = [index];
  }

  /**
   * hotels location Grouping together
   * @param hotel:HotelInterface hotel process
   * @param index:number index hotel in original array
   */
  protected location(hotel: HotelInterface, index: number) {
    if (hotel.location in this.locations)
      this.locations[hotel.location].push(index);
    else
      this.locations[hotel.location] = [index];
  }

  /**
   * hotels price split with length / 5
   * @param hotel:HotelInterface hotel process
   * @param index:number index hotel in original array
   */
  protected price(hotel: HotelInterface, index: number) {
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

  protected sort() {
    this.sorting.priceUp = [...this.hotelsIndex].sort((a, b) => (this.hotels[b].price.total ? this.hotels[b].price.total : 0) - (this.hotels[a].price.total ? this.hotels[a].price.total : 0));
    this.sorting.priceDown = this.sorting.priceUp.reverse();
    this.sorting.starUp = [...this.hotelsIndex].sort((a, b) => this.hotels[b].star - this.hotels[a].star);
    this.sorting.starDown = this.sorting.starUp.reverse();
  }

  /**
   * process all hotels for create filter structure
   */
  public initial() {
    this.hotels.forEach((hotel, index) => {
      this.boardType(hotel, index);
      this.star(hotel, index);
      this.location(hotel, index);
      this.price(hotel, index);
      this.hotelsIndex.push(index);
    });
    this.rangePrice();
    this.sort();
    // TODO test here
  }

  /**
   * return all filter structure
   */
  get structure(): HotelsFilterInterface {
    return {
      boardTypes: this.boardTypes,
      stars: this.stars,
      locations: this.locations,
      rangePrice: this.prices,
      sort: this.sorting,
    }
      ;
  }
}

export default HotelsInitial;
