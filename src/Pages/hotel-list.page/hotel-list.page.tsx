import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {push, replace} from 'connected-react-router';
import {SafeAreaView, StatusBar, TouchableOpacity, View, VirtualizedList} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Spinner, Subtitle, Title} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';

import {
  COLOR_PRIMARY,
  MUTED_LIGHT_XX,
  MUTED_LIGHT_XXX,
  SHADOW_SM_X,
} from '../../../native-base-theme/variables/config';
import {Style} from 'Styles';
import {Conditional, HotelCard, If} from 'Components';

import {GetHotels} from 'Store/Actions';
import {HotelInterface, RootStateInterface} from 'Typescript';
import {AppText} from 'Containers';

const mapStateToProps = (
  {
    hotelsReducer: {basicData, status, filter},
    searchReducer: {search_id, form_data, ...search},
    appReducer: {currency},
  }: RootStateInterface) => ({
  search_id,
  form_data,
  currency,
  status: status,
  search_status: search.status,
  indexes: filter?.hotels,
  filters: filter?.actives,
  hotels: basicData?.hotels,
  facilities: basicData?.facilities,
  hotels_search_id: basicData?.search_id,
  nights: basicData?.search_details.nights_count,
  details: basicData?.search_details,
});

const mapDispatchToProps = {GetHotels, replace, push};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;

class HotelListPage extends Component<Props, {end: boolean, scroll: boolean}> {
  timeOut: any | null = null;
  state = {end: false, scroll: false};

  //=======================================
  // Hooks
  //=======================================
  constructor(props: Props) {
    super(props);
    this.bookIt = this.bookIt.bind(this);
  }

  componentDidMount() {
    const {search_id, hotels_search_id, search_status, GetHotels, status, replace} = this.props;
    if (status === null && search_status === undefined && search_id === undefined && hotels_search_id === undefined)
      replace('/');
    else if (status === null && search_status === undefined && search_id)
      GetHotels(search_id);
  }

  render() {
    //for checking number of active filters
    const activatedFilter = (this.props.filters) ? Object.keys(this.props.filters).length : 0;

    const {hotels, indexes, facilities, status, form_data, currency, nights} = this.props;

    return (
      <Container>
        <Header style={[Style.bg__primary, Style.flex__row]}>
          <StatusBar barStyle="light-content" backgroundColor={COLOR_PRIMARY}/>
          <Left style={[{minWidth: 30}, Style.flex__shrink__0]}>
            <Button onPress={() => this.props.replace('/')} transparent>
              <Icon
                type={'MaterialIcons'}
                name='keyboard-backspace'
                style={[Style.f__30, Style.text__white]}/>
            </Button>
          </Left>
          <TouchableOpacity
            activeOpacity={1}
            style={[
              SHADOW_SM_X,
              Style.ml__2,
              Style.px__5,
              Style.flex__row,
              Style.flex__grow__1,
              Style.align__self_center,
              Style.align__items_center,
              Style.justify__content_between,
              {backgroundColor: '#2047aa', borderRadius: 30, paddingVertical: 3},
            ]}>
            <View style={[Style.mr__4]}>
              <Title style={[Style.f__14]}>{form_data?.destination?.label}</Title>
              <Subtitle
                style={[Style.f__12]}>{`${form_data?.checkIn?.formatted} - ${form_data?.checkOut?.formatted}`}</Subtitle>
            </View>
            <View>
              <Icon
                type={'AntDesign'}
                name='search1'
                style={[Style.f__20, Style.text__white]}/>
            </View>
          </TouchableOpacity>
        </Header>
        <Body style={[{backgroundColor: MUTED_LIGHT_XXX}, Style.w__100]}>
          <View style={[
            {height: 50},
            SHADOW_SM_X,
            Style.bg__white,
            Style.flex__row,
            Style.justify__content_between,
            Style.align__items_center,
          ]}>

            {/*sort*/}
            <TouchableOpacity
              activeOpacity={1}
              style={[
                Style.col__4,
                Style.h__100,
                Style.flex__row,
                Style.justify__content_center,
                Style.align__items_center]}>
              <>
                <Icon type="MaterialIcons" name="sort" style={[Style.f__16, Style.text__info]}/>
                <AppText style={[Style.ml__2, Style.text__primary]}>Sort</AppText>
                <Conditional>
                  <If condition={!!activatedFilter}>
                    <View style={[Style.bg__danger,
                      {width: 6, height: 6, borderRadius: 3, position: 'absolute', top: 15, right: 15}]}>
                    </View>
                  </If>
                </Conditional>
              </>
            </TouchableOpacity>

            {/*divider*/}
            <View style={{width: 1, height: '70%', backgroundColor: MUTED_LIGHT_XX}}/>

            {/*filter*/}
            <TouchableOpacity
              activeOpacity={1}
              style={[
                Style.col__4,
                Style.h__100,
                Style.flex__row,
                Style.justify__content_center,
                Style.align__items_center]}
              onPress={() => this.props.navigation.navigate('filter')}>
              <>
                <Icon type="AntDesign" name="filter" style={[Style.f__16, Style.text__info]}/>
                <AppText style={[Style.ml__2, Style.text__primary]}>Filter</AppText>
                <Conditional>
                  <If condition={!!activatedFilter}>
                    <View style={[Style.bg__danger,
                      {width: 6, height: 6, borderRadius: 3, position: 'absolute', top: 15, right: 15}]}>
                    </View>
                  </If>
                </Conditional>
              </>
            </TouchableOpacity>

            {/*divider*/}
            <View style={{width: 1, height: '70%', backgroundColor: MUTED_LIGHT_XX}}/>

            {/*map*/}
            <TouchableOpacity
              activeOpacity={1}
              style={[
                Style.col__4, Style.h__100, Style.flex__row,
                Style.justify__content_center, Style.align__items_center]
              } onPress={() => {
              this.props.navigation.navigate('map');
            }}>
              <>
                <Icon type="SimpleLineIcons" name="map" style={[Style.f__14, Style.text__info]}/>
                <AppText style={[Style.ml__2, Style.text__primary]}>Map</AppText>
              </>
            </TouchableOpacity>

          </View>
          <SafeAreaView style={[Style.w__100]}>
            {status === 'ok' ?
              <VirtualizedList<HotelInterface>
                data={indexes}
                initialNumToRender={10}
                getItem={(data, index) => hotels![indexes![index]]}
                getItemCount={() => indexes!.length}
                keyExtractor={item => item.hotel_id.toString()}
                ListFooterComponent={this.state.end ? <></> : <Spinner color={'blue'}/>}
                onEndReached={() => this.setState({end: true})}
                renderItem={({item}) => {
                  let facility = facilities![item.hotel_id] ? facilities![item.hotel_id]['Hotel Facilities'] : [];
                  return <HotelCard
                    hotel={item}
                    currency={currency}
                    nights={nights!}
                    hotelFacilities={facility}
                    book={this.bookIt}/>;
                }}/> : <></>
            }

          </SafeAreaView>
        </Body>
      </Container>
    );
  }


  //=======================================
  // Handlers
  //=======================================
  bookIt(id: number, name: string) {
    const {checkin, checkout} = this.props.details!;
    this.props.push(`/hotel/${id}/${name}/${checkin.formatted}/${checkout.formatted}`);
  }

}


export default connector(HotelListPage);
