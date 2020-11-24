import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {Body, Header, Left, Right, Toast} from 'native-base';
import {Style} from 'Styles';
import RoomCard from './room-card/room-card';
import {translate as t} from 'Lib/Languages';
import {AppTitle, BackNavigation} from 'Containers';
import {connect, ConnectedProps} from 'react-redux';
import {HotelOptionInterface, RootStateInterface} from 'Typescript/Interfaces';
import {GetHotelRooms, get_politics as GetPolitics} from 'Store/Actions';
import SearchDetails from './search-details/search-details';
import {LoadingAndError} from './loading-and-error/loading-and-error';
import {HotelRoomAction} from '../index';
import {StackScreenProps} from '@react-navigation/stack';
import Clipboard from '@react-native-community/clipboard';
import {COLOR_SUCCESS} from '../../../native-base-theme/variables/config';

const mapStateToProps = ({hotelReducer: {hotel, rooms}, searchReducer: {search_id, form_data}, appReducer: {currency}}: RootStateInterface) => ({
  hotel: hotel.result,
  rooms: rooms.result ? rooms.result.filter.rooms.map(item => rooms.result!.options[item]) : [],
  nights_count: rooms.result?.night_count,
  adults_count: rooms.result?.adults,
  children_count: rooms.result?.children,

  rooms_count: rooms.result?.req_rooms.length,
  status: rooms.status,
  form_data,
  search_id,
  currency,

});
const connector = connect(mapStateToProps, {GetHotelRooms, GetPolitics});

type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;

class HotelSelectRoom extends Component<Props> {
  loaded: string[] = [];
  queue: string[] = [];
  timeout?: ReturnType<typeof setTimeout>;

  componentDidMount() {
    this.props.GetHotelRooms({hotel_id: this.props.hotel!.hotel.id, search_id: this.props.search_id!});
  }

  onLoad(option: HotelOptionInterface) {
    if (this.loaded.includes(option.option_id)) {
      return;
    }
    this.loaded.push(option.option_id);
    this.queue.push(option.option_id);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.props.GetPolitics(this.queue);
      this.queue = [];
      this.timeout = undefined;
    }, 500);
  }


  render() {
    const hotel = this.props.hotel!.hotel;
    const {
      rooms,
      nights_count,
      currency,
      status,
      form_data,
    } = this.props;

    const onCopy = function(this: {room_name: string[], board_type: string, price: string, per_night: string}) {
      Clipboard.setString(`
         ${t('hotel-name')}: ${hotel.name}
         ${t('hotel-star')}: ${hotel.star}
         ${t('hotel-address')}: ${hotel.address}
         ${t('phone')}: ${hotel.phone}
         ${t('check-in')}: ${form_data.checkIn!.formatted}
         ${t('check-out')}: ${form_data.checkOut!.formatted}
         ${t('rooms')}: ${form_data.rooms!.length}${t('room') + ' ' + t('for')} ${form_data.adultCounts} ${t('Adults')} ${form_data.childCounts ? `and ${form_data.childCounts} ${form_data.childCounts > 1 ? t('children') : t('child')}` : ''}
         ${t(this.room_name.length > 1 ? 'room-name' : 'rooms-name')}: ${this.room_name.join(',')}
         ${t('board-type')}: ${this.board_type}
         ${t('per-night-price')}: ${this.per_night} ${currency} 
         ${t('total')}: ${this.price} ${currency} 
      `);
      Toast.show({
        text: t('room-information-was-successfully-copied'),
        duration: 3000,
        textStyle: {color: COLOR_SUCCESS},
        position: 'bottom',
      });
    };

    return (
      <>
        <Header style={[Style.flex__row, Style.bg__primary, Style.align__items_center, Style.px__0]}>
          <View>
            <BackNavigation/>
          </View>
          <View style={[Style.flex__grow__1]}>
            <AppTitle style={[Style.text__capitalize]} hasSubtitle>
              {translate('choose-your-stay')}</AppTitle>
            <AppSubtitle hasSubtitle>Dec 99 - Feb 99</AppSubtitle>
          </View>
        </Header>
        {/*actions*/}
        <View><HotelRoomAction/></View>
        <View style={[Style.flex__shrink__1]}>
          {/*hotel list*/}
          <FlatList<HotelOptionInterface>
            ListHeaderComponent={SearchDetails}
            ListEmptyComponent={() => <LoadingAndError status={status}/>}
            data={rooms}
            windowSize={3}
            keyExtractor={item => item.option_id}
            style={[Style.mb__1]}
            renderItem={({item}) => {
              this.onLoad(item);
              return (
                <View style={[Style.mb__1]} key={item.option_id}>
                  <RoomCard data={{
                    board_type: item.board_type,
                    price: item.price.total,
                    per_night: item.price.per_night,
                    room_name: item.rooms.map(room => room.room_name!),
                    cancellation_policies: item.cancellation?.policies,
                    nonrefundable: item.deal_name !== null,
                    nights_count: nights_count!,
                    currency,
                    discount: item.discount > 0,
                    onCopy,
                    onReserve: this.onReserve,
                    onRules() {
                    },
                  }}/>
                </View>
              );
            }}

          />

        </View>
      </>
    );
  }

  onReserve = () => {
    this.props.navigation.push('reserve', {
      screen: 'passengers',
    });
  };
}

export default connector(HotelSelectRoom);
