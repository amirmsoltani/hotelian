import React, {PureComponent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {push, replace} from 'connected-react-router';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ActionSheet, Body, Button, Content, Footer, H1, Header, Icon, Left, Right, Spinner, Toast} from 'native-base';

import {Style} from 'Styles';
import {GetHotel} from 'Store/Actions';
import {RootStateInterface} from 'Typescript';
import {Conditional, If} from 'Components';
import {translate as t, translate} from 'Lib/Languages';
import {COLOR_WHITE} from "../../../native-base-theme/variables/config";
import {AppSubtitle, AppText, AppTitle, BackNavigation} from "Containers";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";

const mapStateToProps = ({hotelsReducer: {basicData}, searchReducer: {search_id}, hotelReducer: {hotel: {status, result}}, router}: RootStateInterface) => ({
  search_id,
  status,
  result,
  hotels: basicData?.hotels,
  router,
});
const mapDispatchToProps = {GetHotel, replace, push,};
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props =
  ConnectedProps<typeof connector> &
  StackScreenProps<{ hotel: { id: string, name: string, checkIn?: string, checkOut?: string }, }, 'hotel'>;

class HotelListPage extends PureComponent<Props, { isLiked: boolean }> {
  id?: string;
  hasSearchID: boolean;
  state = {isLiked: false,}


  //=======================================
  // Hooks
  //=======================================
  constructor(props: Props) {
    super(props);
    this.hasSearchID = false;
    this.Ok = this.Ok.bind(this);
    this.Header = this.Header.bind(this);
  }

  componentDidMount() {
    const {result} = this.props;
    if (this.props.status === undefined || (result && result.hotel.id !== +this.id!))
      this.props.GetHotel(+this.id!);

  }

  render() {
    const status = this.props.status;
    const {checkOut, checkIn, id} = this.props.route.params;
    this.id = id;
    this.hasSearchID = !!checkIn && !!checkOut;
    return (
      <>
        {/*header*/}
        <this.Header/>

        {/*content*/}
        <Content style={[Style.w__100]}>
          <Conditional>
            <If condition={status === 'ok'}>
              <this.Ok/>
            </If>
          </Conditional>
        </Content>

        {/*footer*/}
        <Footer>
          <TouchableOpacity>
            <Text>{translate('show-rooms')}</Text>
          </TouchableOpacity>
        </Footer>
      </>
    );
  }


  //=======================================
  // Sections
  //=======================================
  Header() {
    return (
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body>
          <AppTitle hasSubtitle={this.hasSearchID}>{this.props.route.params.name}</AppTitle>
          <Conditional>
            <If condition={this.hasSearchID}>
              <AppSubtitle>{`${this.props.route.params.checkIn} - ${this.props.route.params.checkOut}`}</AppSubtitle>
            </If>
          </Conditional>
        </Body>
        <Right>
          <Button style={[Style.justify__content_end]} transparent>
            <Icon onPress={() => this.onLike()}
                  type='Ionicons' name={this.state.isLiked ? 'heart' : 'heart-outline'}
                  style={[Style.f__20, Style.text__right, Style.text__white]}/>
          </Button>
          <Button style={[Style.justify__content_end]} transparent>
            <Icon onPress={() => this.onShare()}
                  type='Ionicons' name={'share-social-outline'}
                  style={[Style.f__20, Style.text__right, Style.text__white]}/>
          </Button>
          <Button style={[Style.justify__content_end, Style.pr__0]} transparent>
            <Menu style={[Style.justify__content_center]}>
              <MenuTrigger>
                <Icon type='Ionicons' name='ellipsis-vertical' style={[Style.f__20, Style.text__right]}/>
              </MenuTrigger>
              <MenuOptions>
                <MenuOption style={[Style.p__2]}>
                  <AppText style={Style.text__black}>{t('wish-list')}</AppText>
                </MenuOption>
                <MenuOption style={[Style.p__2]}>
                  <AppText style={Style.text__black}>{t('change-currency')}</AppText>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </Button>
        </Right>
      </Header>
    );
  }

  Ok() {
    const {hotel, nsg_images, nsg_descriptions, nsg_facilities} = this.props.result!;
    return (
      <>
        <View style={[Style.bg__info,]}>
          <View>
            {
              [...(new Array(+hotel.star)).keys()].map((name) => <Icon key={name} type={'Entypo'} name='star'/>)
            }
          </View>
          <H1>{hotel.name}</H1>
          <Icon name='location' type={'Entypo'}/>
          <Text>{hotel.location}</Text>
          <Text>{hotel.address}</Text>
          <Text>
            {nsg_descriptions.replace(/&lt;br(\s|'')\/&gt;/g, '\n')}
          </Text>
        </View>
        <Image source={{uri: hotel.image}} style={[Style.w__100, {height: 300}]}/>
        {/*  TODO add Carousel after create component*/}
        {
          Object.values(nsg_facilities).map(item => (
            <View key={item.name}>

              <H1 style={[Style.w__100]}>{item.name}</H1>
              {
                item.values.map(data => <Text key={data}>{data}</Text>)
              }
            </View>
          ))
        }
      </>
    );
  }

  Loading() {
    return (
      <Spinner style={[Style.mb__auto, Style.mt__auto, Style.ml__auto, Style.mr__auto]}/>
    );
  }


  //=======================================
  // Handlers
  //=======================================
  bookIt(id: number) {
    this.props.push(`/passengers/${id}`);
  }

  onLike() {
    this.setState({isLiked: !this.state.isLiked}, () => {
      Toast.show({
        text: `${this.state.isLiked ? 'Saved' : 'Removed'} successfully.`,
        duration: 3000,
        textStyle: {color: COLOR_WHITE},
        position: "bottom",
      })
    });
  }

  onShare() {
    const BUTTONS = [
      {text: "Option 0", icon: "facebook", iconColor: "#2c8ef4"},
      {text: "Option 1", icon: "analytics", iconColor: "#f42ced"},
      {text: "Option 2", icon: "aperture", iconColor: "#ea943b"},
      {text: "Delete", icon: "trash", iconColor: "#fa213b"},
      {text: "Cancel", icon: "close", iconColor: "#25de5b"},
    ];
    ActionSheet.show(
      {
        options: BUTTONS,
        title: "Share via"
      },
      buttonIndex => {
        // this.setState({clicked: BUTTONS[buttonIndex]});
      })
  }
}

export default connector(HotelListPage);
