import React, {Component} from 'react';
import {Alert, View} from "react-native";
import {Body, Content, Header, Left, Right} from "native-base";
import {RoomHotelCard, RoomsAction, RoomSearchDetails} from "../index";
import {Style} from "../../Styles";
import RoomCard from "../test-page/room-card/room-card";
import {AppTitle, BackNavigation} from "../../Containers";

class HotelSelectRoom extends Component {
  render() {

    //dummy data
    const hotel_details = {
      star: 2,
      score: 3.3,
      address: 'address address address address address address',
      hotel_name: 'hotel_name hotel_name hotel_name',
      reviews_count: 6666,
      image_source: null,
    };
    const search_details = {
      checkIn: '99 November 9999',
      checkout: '99 November 9999',
      nights_count: 5,
      rooms_count: 5,
      children_count: 5,
      adults_count: 5,
      children_ages: [5, 7, 1, 3, 4, 5, 6],
    };
    const hotel_rooms = [
      {
        option_id: 1,
        room_name: 'Double king and Queen and Wipe squad',
        board_type: 'bed and breakfast',
        nonrefundable: true,
        cancellation_policies: [
          'age nayayn hotel dahanetoon service mikonim',
          'ba mooshak havapeymatoon o mizanim parche beshin',
          'fosh gozashtam har ki cancel kone',
        ],
        nights_count: 4,
        discount: true,
        price: 10000000,
        currency: 'AED',
        onCopy: () => Alert.alert('onCopy'),
        onRules: () => Alert.alert('onRules'),
        onReserve: () => Alert.alert('onReserve'),
      },
      {
        option_id: 2,
        room_name: 'Otaqe Shah Abbas ba oon kabab hash',
        board_type: 'room only',
        nonrefundable: false,
        cancellation_policies: [
          'age nayayn hotel dahanetoon service mikonim',
          'ba mooshak havapeymatoon o mizanim parche beshin',
          'fosh gozashtam har ki cancel kone',
        ],
        nights_count: 4,
        discount: false,
        price: 10000000,
        currency: 'USD',
        onCopy: () => Alert.alert('onCopy'),
        onRules: () => Alert.alert('onRules'),
        onReserve: () => Alert.alert('onReserve'),
      },
      {
        option_id: 3,
        room_name: 'Wrath King',
        board_type: '',
        nonrefundable: true,
        cancellation_policies: [
          'age nayayn hotel dahanetoon service mikonim',
          'ba mooshak havapeymatoon o mizanim parche beshin',
          'fosh gozashtam har ki cancel kone',
        ],
        nights_count: 4,
        discount: true,
        price: 10000000,
        currency: 'WWW',
        onCopy: () => Alert.alert('onCopy'),
        onRules: () => Alert.alert('onRules'),
        onReserve: () => Alert.alert('onReserve'),
      },
    ];

    return (
      <>
        <Header>
          <Left><BackNavigation/></Left>
          <Body>
            <AppTitle>hotel names goes here!!!</AppTitle>
          </Body>
          <Right/>
        </Header>
        <Content>

          {/*actions*/}
          <View><RoomsAction/></View>

          {/*hotel details*/}
          <View style={[Style.mb__1]}><RoomHotelCard data={hotel_details}/></View>

          {/*search details*/}
          <View style={[Style.mb__1]}><RoomSearchDetails data={search_details}/></View>

          {/*hotel list*/}
          <View style={[Style.mb__1,]}>
            {hotel_rooms.map((item, index) =>
              <View key={item.option_id} style={[Style.mb__1]}>
                <RoomCard data={item}/>
              </View>)}
          </View>

        </Content>
      </>
    );
  }
}

export default HotelSelectRoom;
