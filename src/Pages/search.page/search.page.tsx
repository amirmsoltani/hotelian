import React, {Component} from 'react';
import {FlatList, ScrollView} from "react-native";
import {Body, Button, Container, Content, Form, H3, Header, Icon, Left, Picker, Right, View} from "native-base";

import {Props, State} from './search-page.types';
import style from './search-page.styles'
import SearchFrom from '../../Forms/SearchForm/SearchFrom';
import {RecentSearch, TopDestination, TopProperty} from "../../Components";
import {COLOR_PRIMARY} from "../../../native-base-theme/variables/config";
import {Actions} from "react-native-router-flux";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";


class SearchPage extends Component<Props, State> {
  state = {
    selected: "key1"
  };

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {

    //dummy data
    const recentSearch = [
      {
        dest: 'Rome, Italy',
        checkin: '02 Sep',
        checkout: '03 Aug',
        adult: 1,
        room: 2,
        children: 3,
        key: 'vsn2ad3d4980f3df2q',
      },
      {
        dest: 'London, United Kingdom',
        checkin: '02 Sep',
        checkout: '03 Aug',
        adult: 9,
        room: 9,
        children: 9,
        key: '56n2sd33498rf3df2j',
      },
      {
        dest: 'Las Vegas, Under city, United State of America',
        checkin: '02 Sep',
        checkout: '03 Aug',
        adult: 2,
        room: 2,
        children: 0,
        key: '4fn2sdj3498rfr4hj',
      },
    ];
    const topDestination = [
      {
        source: require('../../Assets/Images/top_destination_1.jpg'),
        caption: 'London, United Kingdom',
        key: '1',
      },
      {
        source: require('../../Assets/Images/top_destination_2.jpg'),
        caption: 'Paris, France',
        key: '2',
      },
      {
        source: require('../../Assets/Images/top_destination_3.jpg'),
        caption: 'Madrid, Spain',
        key: '3',
      },
      {
        source: require('../../Assets/Images/top_destination_4.jpg'),
        caption: 'Dubai, UAE',
        key: '4',
      },
      {
        source: require('../../Assets/Images/top_destination_5.jpg'),
        caption: 'Vassa, Finland',
        key: '5',
      },
    ];
    const topProperty = [
      {
        source: require('../../Assets/Images/hostel.png'),
        caption: 'Hostel',
        key: '1',
      },
      {
        source: require('../../Assets/Images/apartment.png'),
        caption: 'Apartment',
        key: '2',
      },
      {
        source: require('../../Assets/Images/resort.png'),
        caption: 'Resort',
        key: '3',
      },
      {
        source: require('../../Assets/Images/villa.png'),
        caption: 'Villa',
        key: '4',
      },
    ];


    return (
      <>
        <Header style={[{backgroundColor: COLOR_PRIMARY},]}>
          <Left>
            <Button transparent onPress={Actions.pop}>
              <Icon type={'Feather'} name='menu' style={{fontSize: 30}}/>
            </Button>
          </Left>
          <Body>
            <AppText style={[
              Style.text__white,
              Style.text__center,
              Style.w__100,
              Style.text__bold,
              {fontSize: 24,}
            ]}>
              Hotelian<AppText style={[
              {fontSize: 24,},
              Style.text__important,
            ]}>.com</AppText> </AppText>
          </Body>
          <Right>
            <Button style={[
              Style.px__0,
              Style.justify__content_end,
              {minWidth: 55,}
            ]} transparent>
              <Icon type={'AntDesign'} name='message1' style={{fontSize: 20}}/>
            </Button>
            <Button style={[
              Style.px__0,
              Style.justify__content_end,
              {minWidth: 55,}
            ]} transparent badge>
              <Icon type={'MaterialIcons'} name='notifications-none' style={{fontSize: 24}}/>
            </Button>
            <Button style={[
              Style.px__0,
              Style.justify__content_end,
              {minWidth: 46,}
            ]} transparent>
              <Icon type={'Feather'} name='more-vertical' style={{fontSize: 24}}/>
            </Button>
          </Right>
        </Header>
        <ScrollView style={style.container}>

          {/*background shapes*/}
          <View style={style.bg_rect}/>
          <View style={style.bg_triangle}/>

          {/*search form*/}
          <View style={{
            paddingHorizontal: 15,
            paddingVertical: 25,
          }}>
            <SearchFrom/>
          </View>

          {/*recent search*/}
          <View style={[style.wrapper]}>
            <H3 style={style.header}>Recent Search</H3>
            <View>
              <FlatList
                data={recentSearch}
                renderItem={({item}) =>
                  <RecentSearch
                    dest={item.dest}
                    checkin={item.checkin}
                    checkout={item.checkout}
                    adult={item.adult}
                    room={item.room}
                    children={item.children}/>
                }
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/*top destination*/}
          <View style={[style.wrapper]}>
            <H3 style={style.header}>Top Destinations</H3>
            <View>
              <FlatList
                data={topDestination}
                renderItem={({item}) =>
                  <TopDestination
                    source={item.source}
                    caption={item.caption}
                  />
                }
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/*top properties*/}
          <View style={[style.wrapper]}>
            <H3 style={style.header}>Top Destinations</H3>
            <View>
              <FlatList
                data={topProperty}
                renderItem={({item}) =>
                  <TopProperty
                    source={item.source}
                    caption={item.caption}
                  />
                }
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

        </ScrollView>
      </>
    );
  }
}

export default SearchPage;
