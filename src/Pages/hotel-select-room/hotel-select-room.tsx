import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {Header} from 'native-base';
import {Style} from 'Styles';
import RoomCard from './room-card/room-card';
import {AppSubtitle, AppTitle, BackNavigation} from 'Containers';
import {connect, ConnectedProps} from 'react-redux';
import {HotelOptionInterface, RootStateInterface} from 'Typescript/Interfaces';
import {GetHotelRooms} from 'Store/Actions';
import SearchDetails from './search-details/search-details';
import {LoadingAndError} from './loading-and-error/loading-and-error';
import {StackScreenProps} from '@react-navigation/stack';
import {HotelRoomAction} from "../index";
import {translate} from "../../Lib/Languages";

const mapStateToProps = ({hotelReducer: {hotel, rooms}, searchReducer: {search_id, form_data}, appReducer: {currency}}: RootStateInterface) => ({
  hotel: hotel.result,
  rooms: rooms.result ? rooms.result.filter.hotels.map(item => rooms.result!.options[item]) : [],
  nights_count: rooms.result?.night_count,
  adults_count: rooms.result?.adults,
  children_count: rooms.result?.children,

  rooms_count: rooms.result?.req_rooms.length,
  status: rooms.status,
  form_data,
  search_id,
  currency,

});
const connector = connect(mapStateToProps, {GetHotelRooms});

type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;

class HotelSelectRoom extends Component<Props> {
  list: FlatList<HotelOptionInterface> | null = null;

  componentDidMount() {
    this.props.GetHotelRooms({hotel_id: this.props.hotel!.hotel.id, search_id: this.props.search_id!});
  }

  render() {
    const hotel = this.props.hotel!.hotel;
    const {
      rooms,
      nights_count,
      currency,
      status,
    } = this.props;


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
            renderItem={({item}) => (
              <View style={[Style.mb__1]} key={item.option_id}>
                <RoomCard data={{
                  board_type: item.board_type,
                  price: item.price.total,
                  room_name: item.rooms.map(room => room.room_name!),
                  cancellation_policies: item.cancellation?.alerts,
                  nonrefundable: item.deal_name !== null,
                  nights_count: nights_count!,
                  currency,
                  discount: item.discount > 0,
                  onReserve: this.onReserve,
                  onCopy() {
                  },
                  onRules() {
                  },
                }}/>
              </View>
            )}

          />

        </View>
      </>
    );
  }

  onReserve = () => {
    this.props.navigation.push('reserve', {
      screen: 'passengers',
    });
  }
}

export default connector(HotelSelectRoom);
