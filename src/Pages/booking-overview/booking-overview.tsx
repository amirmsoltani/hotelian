import React, {Component} from 'react';
import {Content, Footer, Header} from 'native-base';
import {TouchableNativeFeedback, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {Style} from '../../Styles';
import {AppText, AppTitle, BackNavigation} from '../../Containers';
import {ElIf, If} from '../../Components/conditional.component';
import {Conditional, ScreenLoading} from '../../Components';
import {translate as t} from '../../Lib/Languages';
import BoRoomDetails from './bo-room-details/bo-room-details';
import BoHotelDetails from './bo-hotel-details/bo-hotel-details';
import {RoomSearchDetails} from '../index';
import BoFacilities from './bo-facilities/bo-facilities';
import BoLateCheckIn from './bo-late-check-in/bo-late-check-in';
import BoFooter from './bo-footer/bo-footer';
import {RootStateInterface} from '../../Typescript/Interfaces';
import moment from 'moment';
import {connect, ConnectedProps} from 'react-redux';


//status of receiving data
const status: 'ok' | 'loading' | 'error' = 'ok';
const mapStateToProps = (state: RootStateInterface) => {
  const {hotel, nsg_facilities: {hotel_facilities}} = state.hotelReducer.hotel.result!;
  const search_from = state.searchReducer.form_data;
  const children_ages: number[] = [];
  const passenger = state.bookReducer.passenger;
  const option = state.hotelReducer.rooms.result!.options!
    .find(option => option.option_id === state.bookReducer.passenger!.option_id!);
  search_from.rooms!.forEach(room => {
    room.children.forEach(child => children_ages.push(child));
  });
  return {
    hotel_details: {
      hotel_name: hotel.name,
      hotel_star: +hotel.star,
      hotel_address: hotel.address,
      hotel_location: hotel.location,
      hotel_image: hotel.image,
    },
    search_details: {
      checkIn: search_from.checkIn!.formatted,
      checkout: search_from.checkOut!.formatted,
      adults_count: search_from.adultCounts!,
      nights_count: moment(search_from.checkOut!.value, 'DD-MM-YYYY').diff(moment(search_from.checkIn!.value, 'DD-MM-YYYY'), 'days'),
      children_ages,
      children_count: children_ages.length,
      rooms_count: search_from.rooms!.length,
    },
    facilities: hotel_facilities.values,
    room_details: {
      room_names: option!.rooms.map(room => room.room_name!) as string[],
      cancellation_policies: ['TODO fix here'],//option!.cancellation!.policies,
      alerts: option!.cancellation!.alerts.map((alert, index) => `${index + 1} - ${alert}`).join('\n'),
      restrictions: 'TODO fix here',//option!.cancellation!.restrictions,
      boardType: option!.board_type,
    },
    late_check_in: {
      late_check_in: passenger!.late_checkin!,
      request_message: passenger!.description,
    },
    guest_information: passenger!.rooms!.map(room => room.persons.map(person => ({
      first_name: person.first_name!,
      last_name: person.last_name!,
      title: person.gender ?? null,
      age: person.age,
    }))),
    currency: state.appReducer.currency,
    price: option!.price.total,
  };
};

const connector = connect(mapStateToProps);

class BookingOverview extends Component

  <StackScreenProps<any> & ConnectedProps<typeof connector>> {


  render() {

    return (
      <>
        {/*header*/}
        <Header style={[Style.flex__row, Style.bg__primary, Style.align__items_center, Style.px__0]}>
          <View>
            <BackNavigation/>
          </View>
          <View style={[Style.flex__grow__1]}>
            <AppTitle>Booking overview</AppTitle>
          </View>
        </Header>

        {/*content*/}
        <Content>
          <Conditional>
            <If condition={status === 'loading'}><ScreenLoading/></If>
            <ElIf condition={status === 'ok'}>

              {/*/!*hotel details*!/*/}
              <View style={[Style.mb__1]}><BoHotelDetails data={this.props.hotel_details}/></View>

              {/*search details*/}
              <View style={[Style.mb__1]}>
                <RoomSearchDetails data={this.props.search_details}/>
                <View style={[Style.px__3, Style.pb__3, Style.bg__white]}>
                  <TouchableNativeFeedback onPress={() => this.onShowMore('guests_information')}>
                    <AppText style={[Style.text__capitalize, Style.f__12, Style.text__info, Style.py__1]}>
                      {t('guests-information')}</AppText>
                  </TouchableNativeFeedback>
                </View>
              </View>

              {/*facilities*/}
              <View style={Style.mb__1}><BoFacilities
                data={{facilities: this.props.facilities, show_more: () => this.onShowMore('facilities')}}/></View>

              {/*room details*/}
              <View style={[Style.mb__1]}>
                {/*TODO fix structure*/}
                <BoRoomDetails
                  data={{
                    ...this.props.room_details,
                    show_more_policy: () => this.onShowMore('cancellations_policies'),
                  }}/></View>

              {/*late checkin*/}
              <View style={[Style.mb__1]}><BoLateCheckIn data={this.props.late_check_in}/></View>

            </ElIf>
            <ElIf condition={status === 'error'}>
              <AppText>Some thing went wrong</AppText>
            </ElIf>
          </Conditional>
        </Content>

        {/*footer*/}
        <Footer style={[Style.bg__white]}>
          <BoFooter data={{
            button_label: t('final-step'),
            total_currency: this.props.currency,
            total_price: this.props.price,
            click: this.onFinalStep,
          }}/>
        </Footer>

      </>
    );
  }

  onShowMore(tab_name: string) {

    const tab_map: {[key: string]: number} = {
      'guests_information': 0,
      'facilities': 1,
      'cancellations_policies': 2,
    };
    this.props.navigation.navigate('bo-more', {
      tab_number: (tab_map[tab_name] || 0),
    });
  }

  onFinalStep = () => {
    //navigate to final step
    this.props.navigation.navigate('confirm');
  };


}

export default connector(BookingOverview);

