import React, {Component} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Body, Button, H3, Header, Icon, Left, Right, View} from 'native-base';
import {Menu, MenuOption, MenuOptions, MenuTrigger} from 'react-native-popup-menu';
import {StackScreenProps} from '@react-navigation/stack';
import {Props, State} from './search-page.types';
import style from './search-page.styles';
import SearchFrom from 'Forms/SearchForm/SearchFrom';
import {
  Conditional,
  CurrencyModal,
  ElIf,
  If,
  LanguageModal,
  RecentSearch,
  TopDestination,
  TopProperty,
} from 'Components';
import {COLOR_PRIMARY} from '../../../native-base-theme/variables/config';
import {AppModal, AppText} from 'Containers';
import {Style} from 'Styles';
import {translate as t} from 'Lib/Languages';


class SearchPage extends Component<Props & StackScreenProps<{}>, State> {
  static navigationOptions = {
    //To hide the ActionBar/NavigationBar
    header: null,
  };
  state = {
    modalVisibility: false,

    //'language' , 'currency
    modalName: null,

  };

  //=======================================
  // Hooks
  //=======================================
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
    const {navigation} = this.props;
    return (
      <>
        <Header style={[{backgroundColor: COLOR_PRIMARY}]}>
          <Left>
            <Button transparent onPress={navigation.pop}>
              <Icon type={'Feather'} name='menu' style={{fontSize: 30}}/>
            </Button>
          </Left>
          <Body>
            <AppText style={[
              Style.text__white,
              Style.text__center,
              Style.w__100,
              Style.text__bold,
              {fontSize: 24},
            ]}>Hotelian<AppText style={[{fontSize: 24}, Style.text__important]}>.com</AppText>
            </AppText>
          </Body>
          <Right>
            <Button style={[Style.px__0, Style.justify__content_end, {width: 55}]} transparent>
              <Icon type={'AntDesign'} name='message1' style={{fontSize: 20}}/>
            </Button>
            <Button style={[Style.px__0, Style.justify__content_end, {width: 55}]} transparent>
              <Icon type={'MaterialIcons'} name='notifications-none' style={{fontSize: 24}}/>
            </Button>
            <Button style={[Style.px__0, Style.justify__content_end, {width: 55}]} transparent>
              <Menu style={[Style.w__100, Style.h__100, Style.justify__content_center]}>
                <MenuTrigger>
                  <Icon type={'Feather'} name='more-vertical'
                        style={[{fontSize: 24}, Style.text__right]}/>
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption
                    style={[Style.p__2]}
                    onSelect={() => this.onShowModal('language')}>
                    <AppText style={Style.text__black}>{t('change-language')}</AppText>
                  </MenuOption>
                  <MenuOption style={[Style.p__2]}
                              onSelect={() => this.onShowModal('currency')}>
                    <AppText style={Style.text__black}>{t('change-currency')}</AppText>
                  </MenuOption>
                </MenuOptions>
              </Menu>
              <AppModal
                visibility={this.state.modalVisibility}
                onClose={() => this.onCloseModal()}>
                <Conditional>
                  <If condition={this.state.modalName === 'language'}>
                    <LanguageModal onClose={() => this.onCloseModal()}/>
                  </If>
                  <ElIf condition={this.state.modalName === 'currency'}>
                    <CurrencyModal onClose={() => this.onCloseModal()}/>
                  </ElIf>
                </Conditional>
              </AppModal>
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
            <H3 style={style.header}>{t('recent-search')}</H3>
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
            <H3 style={style.header}>{t('top-cities')}</H3>
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
            <H3 style={style.header}>{t('top-property')}</H3>
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

  //=======================================
  // Handlers
  //=======================================
  onCloseModal() {
    this.setState({
      modalVisibility: false,
      modalName: null,
    });
  }

  onShowModal(modalName: string) {
    this.setState({
      modalVisibility: true,
      modalName: modalName,
    });
  }
}

export default SearchPage;
