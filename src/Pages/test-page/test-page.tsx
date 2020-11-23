import React, {Component} from 'react';
import {Button, Content, Footer, Header} from "native-base";

import {Style} from "../../Styles";
import {AppText, AppTitle, BackNavigation} from "../../Containers";
import {ElIf, If} from "../../Components/conditional.component";
import {Conditional, ScreenLoading} from "../../Components";
import {TouchableNativeFeedback, View} from "react-native";
import {translate, translate as t} from "../../Lib/Languages";
import BoRoomDetails from "./bo-room-details/bo-room-details";
import BoHotelDetails from "./bo-hotel-details/bo-hotel-details";
import {RoomSearchDetails} from "../index";
import BoFacilities from "./bo-facilities/bo-facilities";
import BoLateCheckIn from "./bo-late-check-in/bo-late-check-in";


//status of receiving data
const status: 'ok' | 'loading' | 'error' = 'ok';

class TestPage extends Component {
  render() {

    //dummy data
    const hotel_details = {
      hotel_name: 'Hotel darvishi new york',
      hotel_star: 3,
      hotel_address: 'meydoon shohada, nareside be abmive reza',
      hotel_location: 'NY City',
      hotel_image: null,
    };
    const search_details = {
      checkIn: '99 December 9999',
      checkout: '99 December 9999',
      adults_count: 4,
      nights_count: 3,
      children_ages: [1, 3, 5, 7, 9],
      children_count: 3,
      rooms_count: 6,
    }
    const facilities: string[] = [
      'parking', 'wifi', 'dog', 'sandis', 'pool', 'door',
      'bedroom', 'windows', 'photoshop', 'alignItems', 'kotlet', 'boom boom',
    ];
    const room_details = {
      room_names: ['kings and queen bed', 'ECMA 2016', 'eslint Vs tslint'],
      cancellation_policies: ['az 99/99/99 ta 99/99/99 zelzele miyad', 'drum dum dum umuddmdudm d'],
      alerts: 'aaaa llllll eeeeee rrrrrr tttttt sssssss',
      restrictions: 'rrr eee sss tttt rrr iii cccc ttt iii ooo nnn ssss',
      boardType: 'bed and breakfast',
    };
    const late_check_in = {
      late_check_in: '99:99 - 99:99',
      request_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
    const guest_information = [
      [
        {first_name: 'ali', last_name: 'alizade', title: 'MR', age: null},
        {first_name: 'sanaz', last_name: 'sanaz zade', title: 'MS', age: null},
        {first_name: 'ali', last_name: 'alizade', title: null, age: 6},
      ],
      [
        {first_name: 'akbar', last_name: 'misaqiyan', title: 'MR', age: null},
        {first_name: 'hazrat', last_name: 'mohamad', title: null, age: 9},
        {first_name: 'ali', last_name: 'khameneyi', title: null, age: 6},
      ],
      [
        {first_name: 'darkmoon', last_name: 'faire', title: 'MR', age: null},
        {first_name: 'spectrum', last_name: 'coordination', title: 'MS', age: null},
      ]
    ];

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

              {/*hotel details*/}
              <View style={[Style.mb__1]}><BoHotelDetails data={hotel_details}/></View>

              {/*search details*/}
              <View style={[Style.mb__1]}>
                <RoomSearchDetails data={search_details}/>
                <View style={[Style.px__3, Style.pb__3, Style.bg__white]}>
                  <TouchableNativeFeedback>
                    <AppText style={[Style.text__capitalize, Style.f__12, Style.text__info, Style.py__1]}>
                      {translate('guests-information')}</AppText>
                  </TouchableNativeFeedback>
                </View>
              </View>

              {/*facilities*/}
              <View style={Style.mb__1}><BoFacilities facilities={facilities}/></View>

              {/*room details*/}
              <View style={[Style.mb__1]}><BoRoomDetails data={room_details}/></View>

              {/*late checkin*/}
              <View style={[Style.mb__1]}><BoLateCheckIn data={late_check_in}/></View>

            </ElIf>
            <ElIf condition={status === 'error'}>
              <AppText>Some thing went wrong</AppText>
            </ElIf>
          </Conditional>
        </Content>

        {/*footer*/}
        <Footer style={[Style.bg__white]}>
          <View style={[Style.w__100, Style.p__1, Style.flex__row]}>
            <View style={[Style.col__6]}>
              <AppText style={[Style.f__14,]}>{t('total')}:</AppText>
              <View style={[Style.flex__row]}>
                <AppText style={[Style.f__14, Style.text__bold]}>999,999,999,999</AppText>
                <AppText style={[Style.f__14, Style.text__bold]}> IRR</AppText>
              </View>
            </View>
            <View style={[Style.col__6, Style.pl__1
            ]}>
              <Button block style={[Style.bg__primary]}>
                <AppText firstLetter style={[Style.text__white, Style.text__bold]}>{t('final-step')}</AppText>
              </Button>
            </View>
          </View>
        </Footer>

      </>
    );
  }
}

export default TestPage;
