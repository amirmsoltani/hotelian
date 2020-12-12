import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Toast} from 'native-base';
import {Style} from 'Styles';
import RoomCard from './room-card/room-card';
import {translate as t} from 'Lib/Languages';
import {AppModal, AppSubtitle, AppText, AppTitle, BackNavigation} from 'Containers';
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
import {Menu, MenuOption, MenuOptions, MenuTrigger} from 'react-native-popup-menu';
import CurrencyModal from '../../Containers/currency-modal/currency-modal';

const mapStateToProps = ({hotelReducer: {hotel, rooms}, searchReducer: {search_id, form_data, expire, status}, appReducer: {currency}, navigation: {current: {name}}}: RootStateInterface) => ({
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
  search_status: status,
  route_name: name,
});
const connector = connect(mapStateToProps, {GetHotelRooms, GetPolitics});

type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;
type States = {
  modalVisibility: boolean;
}

class HotelSelectRoom extends Component<Props, States> {
  loaded: string[] = [];
  queue: string[] = [];
  timeout?: ReturnType<typeof setTimeout>;

  state = {
    modalVisibility: false,
  };

  //=======================================
  // Hooks
  //=======================================
  componentDidMount() {
    this.props.GetHotelRooms({hotel_id: this.props.hotel!.hotel.id, search_id: this.props.search_id!});
  }

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    if (this.props.route_name !== 'select-room' && nextProps.route_name !== 'select-room') {
      return false;
    }
    return true;
  }

  render() {
    const hotel = this.props.hotel!.hotel;
    const {
      rooms,
      nights_count,
      currency,
      status,
      form_data,
      search_status,
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
          <Right style={[Style.flex__row, Style.align__items_center]}>
            {this.props.search_status === 'ok' ?
              <ExpireTimer styles={[Style.f__14]} start_time={this.props.expire!}/> : null}
            <Button style={[Style.justify__content_end, Style.pr__0]} transparent>
              <Menu style={[Style.justify__content_center]}>
                <MenuTrigger>
                  <Icon type="Ionicons" name="ellipsis-vertical"
                        style={[Style.f__20, Style.text__right]}/>
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption style={[Style.p__2]}
                              onSelect={this.onShowModal}>
                    <AppText style={Style.text__black}>{t('change-currency')}</AppText>
                  </MenuOption>
                </MenuOptions>
              </Menu>
              <AppModal
                backdrop
                visibility={this.state.modalVisibility}
                onClose={this.onHideModal}>
                <CurrencyModal onClose={this.onHideModal}/>
              </AppModal>
            </Button>
          </Right>

          {/*currency modal*/}
          <AppModal
            backdrop
            visibility={this.state.modalVisibility}
            onClose={this.onHideModal}>
            <CurrencyModal onClose={this.onHideModal}/>
          </AppModal>
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
                <If condition={status === 'loading' || search_status === 'loading'}>
                  <View style={[Style.w__100, Style.align__items_center, Style.justify__content_center]}>
                    {[...Array(3)].map((item, index) => <SkeletonLoader key={index}/>)}
                  </View>
                </If>

                {/*error*/}
                <ElIf condition={status === 'error'}>
                  <AppText>Error in empty list </AppText>
                </ElIf>

                {/*other*/}
                <Else><AppText>other in empty list</AppText></Else>

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
                    deadline: item.cancellation?.deadline ?? '',
                    nights_count: nights_count!,
                    discount: item.discount > 0,
                    option: item,
                    currency,
                    onReserve,
                    onCopy,
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


  //=======================================
  // Handlers
  //=======================================
  onLoad(option: HotelOptionInterface) {
    if (this.loaded.includes(option.option_id) || option.cancellation) {
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

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.search_id !== this.props.search_id) {
      this.loaded = [];
      this.queue = [];
    }
    if (this.props.currency !== prevProps.currency) {
      this.props.GetHotelRooms({hotel_id: this.props.hotel!.hotel.id, search_id: this.props.search_id!});
      this.loaded = [];
      this.queue = [];
    }
  }

  onShowModal = () => {
    this.setState({modalVisibility: true});
  };

  onHideModal = () => {
    this.setState({modalVisibility: false});
  };


}

export default connector(HotelSelectRoom);
