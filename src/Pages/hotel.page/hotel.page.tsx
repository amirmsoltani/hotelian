import React, {PureComponent} from 'react';
import {useParams} from 'react-router-native';
import {connect, ConnectedProps} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {goBack, push, replace} from 'connected-react-router';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Body, Button, Footer, H1, Header, Icon, Left, Right, Spinner, Toast} from 'native-base';

import {Style} from 'Styles';
import {GetHotel} from 'Store/Actions';
import {RootStateInterface} from 'Typescript';
import {Conditional, Else, If} from 'Components';
import {AppSubtitle, AppText, AppTitle, BackNavigation} from "Containers";
import {translate as t, translate} from 'Lib/Languages';
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";

const mapStateToProps = ({hotelsReducer: {basicData}, searchReducer: {search_id}, hotelReducer: {hotel: {status, result}}, router}: RootStateInterface) => ({
  search_id,
  status,
  result,
  hotels: basicData?.hotels,
  router,
});
const mapDispatchToProps = {
  GetHotel,
  replace,
  push,
  goBack,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props =
  ConnectedProps<typeof connector>
  & StackScreenProps<{ hotel: { id: string, name: string, checkIn?: string, checkOut?: string } }, 'hotel'>;

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
    this.Loading = this.Loading.bind(this);
  }

  componentDidMount() {
    const {result} = this.props;
    if (this.props.status === undefined || (result && result.hotel.id !== +this.id!))
      this.props.GetHotel(+this.id!);
  }

  render() {
    const status = this.props.status;
    return (
      <>
        <this.Header/>
        <Body style={[Style.w__100]}>
          <Conditional>
            <If condition={status === 'ok'}>
              <this.Ok/>
            </If>
            <Else>
              <this.Loading/>
            </Else>
          </Conditional>
        </Body>
        <Footer>
          <TouchableOpacity>
            <Text>{translate('show-rooms')}</Text>
          </TouchableOpacity>
        </Footer>
      </>
    );
  }


  //=======================================
  // Handlers
  //=======================================
  Header() {
    const {name, checkOut, checkIn, id} = useParams();
    this.hasSearchID = !!checkIn && !!checkOut;
    this.id = id;
    return (
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body>
          <AppTitle hasSubtitle={this.hasSearchID}>{name}</AppTitle>
          <Conditional>
            <If condition={this.hasSearchID}>
              <AppSubtitle>{`${checkIn} - ${checkOut}`}</AppSubtitle>
            </If>
          </Conditional>
        </Body>
        <Right>
          <Button style={[Style.justify__content_end]} transparent>
            <Icon onPress={() => Toast.show({
              text: "Wrong password!",
              buttonText: "OK",
              duration: 3000,
              buttonTextStyle: {color: "#008000"},
              buttonStyle: {color: "#61dafb"},
              textStyle: {color: 'white'},
              position: "bottom",
            })}
                  type='Ionicons' name={this.state.isLiked ? 'heart' : 'heart-outline'}
                  style={[Style.f__20, Style.text__right, Style.text__white]}/>
          </Button>
          <Button style={[Style.justify__content_end, Style.pr__0]} transparent>
            <Menu style={[Style.justify__content_center]}>
              <MenuTrigger>
                <Icon type='Ionicons' name='ellipsis-vertical'
                      style={[Style.f__20, Style.text__right]}/>
              </MenuTrigger>
              <MenuOptions>
                <MenuOption style={[Style.p__2]}>
                  <AppText style={Style.text__black}>{t('change-language')}</AppText>
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

  bookIt(id: number) {
    this.props.push(`/passengers/${id}`);
  }

  Ok() {
    const {hotel, nsg_images, nsg_descriptions, nsg_facilities} = this.props.result!;
    return (
      <ScrollView>
        <View style={[Style.bg__info, Style.w__100]}>
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
      </ScrollView>
    );
  }

  Loading() {
    return (
      <Spinner style={[Style.mb__auto, Style.mt__auto, Style.ml__auto, Style.mr__auto]}/>
    );
  }

  like() {
    this.setState({isLiked: true});
  }

  disLike() {
    this.setState({isLiked: false});
  }

}

export default connector(HotelListPage);
