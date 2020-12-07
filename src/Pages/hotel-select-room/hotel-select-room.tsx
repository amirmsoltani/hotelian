import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {Body, Header, Left, Right, Toast} from 'native-base';
import {Style} from 'Styles';
import RoomCard from './room-card/room-card';
import {translate as t} from 'Lib/Languages';
import {AppSubtitle, AppText, AppTitle, BackNavigation} from 'Containers';
import {connect, ConnectedProps} from 'react-redux';
import {HotelOptionInterface, RootStateInterface} from 'Typescript/Interfaces';
import {get_politics as GetPolitics, GetHotelRooms} from 'Store/Actions';
import SearchDetails from './search-details/search-details';
import {HotelRoomAction} from '../index';
import {StackScreenProps} from '@react-navigation/stack';
import Clipboard from '@react-native-community/clipboard';
import {COLOR_WHITE} from '../../../native-base-theme/variables/config';
import {Conditional, ElIf, Else, ExpireTimer, If} from '../../Components';
import SkeletonLoader from './room-card/skeleton-loader/skeleton-loader';

const mapStateToProps = ({hotelReducer: {hotel, rooms}, searchReducer: {search_id, form_data, expire}, appReducer: {currency}}: RootStateInterface) => ({
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
  expire,
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
    const {navigation} = this.props;
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
        text: t('copied') + '.',
        duration: 1500,
        textStyle: {color: COLOR_WHITE, textTransform: 'capitalize', fontSize: 14},
        position: 'bottom',
      });
    };
    const onReserve = function(this: {option: HotelOptionInterface}) {
      navigation.push('reserve', {screen: 'passenger', params: this.option});
    };

    return (
      <>
        {/*header*/}
        <Header style={[Style.bg__primary, Style.flex__row]}>
          <Left><BackNavigation/></Left>
          <Body style={[Style.flex__grow__1]}>
            <AppTitle style={[Style.text__capitalize]} hasSubtitle>
              {t('choose-your-stay')}</AppTitle>
            <AppSubtitle hasSubtitle>
              {`${this.props.form_data.checkIn!.formatted} - ${this.props.form_data.checkOut!.formatted}`}
            </AppSubtitle>
          </Body>
          <Right>
            {this.props.expire !== undefined ?
              <ExpireTimer styles={[Style.pr__2, Style.f__14]} start_time={this.props.expire!}/> : null}
          </Right>
        </Header>

        {/*actions*/}
        <View><HotelRoomAction hotel={hotel}/></View>

        {/*content*/}
        <View style={[Style.w__100, Style.flex__shrink__1]}>

          {/*hotel list*/}
          <FlatList<HotelOptionInterface>
            ListHeaderComponent={SearchDetails}
            ListEmptyComponent={
              <Conditional>

                {/*loading*/}
                <If condition={status === 'loading'}>
                  <View style={[Style.w__100, Style.align__items_center, Style.justify__content_center]}>
                    {[...Array(3)].map((item, index) => <SkeletonLoader key={index}/>)}
                  </View>
                </If>

                {/*error*/}
                <ElIf condition={status === 'error'}>
                  <AppText>Error in empty list </AppText>
                </ElIf>

                {/*other*/}
                <Else>
                  <AppText>other in empty list</AppText>
                </Else>

              </Conditional>
            }
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
                    cancellation_policies: item.cancellation ? item.cancellation.policies : item.cancellation,
                    nonrefundable: item.deal_name !== null,
                    nights_count: nights_count!,
                    currency,
                    discount: item.discount > 0,
                    option: item,
                    onCopy,
                    onReserve: onReserve,
                    onRules() {
                    },
                  }}/>
                </View>
              );
            }}/>

        </View>
      </>
    );
  }


}

export default connector(HotelSelectRoom);
