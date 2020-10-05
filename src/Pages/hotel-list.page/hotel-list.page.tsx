import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {push, replace} from 'connected-react-router';
import {StackScreenProps} from '@react-navigation/stack';
import {I18nManager, SafeAreaView, TouchableOpacity, View, VirtualizedList} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Right, Spinner, Subtitle, Title} from 'native-base';

import {
  COLOR_WARNING,
  MUTED_LIGHT_XX,
  MUTED_LIGHT_XXX,
  SHADOW_SM_X,
} from '../../../native-base-theme/variables/config';
import {Style} from 'Styles';
import {Conditional, HotelCard, If} from 'Components';

import {GetHotels} from 'Store/Actions';
import {HotelInterface, RootStateInterface} from 'Typescript';
import {AppModal, AppText} from 'Containers';
import {translate} from "../../Lib/Languages";
import {ProgressBar} from "@react-native-community/progress-bar-android";
import SearchFrom from "../../Forms/SearchForm/SearchFrom";

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

class HotelListPage extends Component<Props, { end: boolean, scroll: boolean, modifySearch: boolean }> {
  timeOut: any | null = null;
  state = {
    end: false,
    scroll: false,

    //flag for hide/show modify search modal
    modifySearch: false,
  };

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
          {/*<StatusBar barStyle="light-content" backgroundColor={COLOR_PRIMARY}/>*/}
          <Left>
            <Button onPress={() => this.props.replace('/')} transparent>
              <Icon type={'Ionicons'} name={I18nManager.isRTL ? 'chevron-forward' : 'chevron-back'}
                    style={[Style.f__20, Style.text__white,]}/>
            </Button>
          </Left>
          <Body>
            <TouchableOpacity
              onPress={this.showModifySearch.bind(this)}
              style={[Style.bg__warning, Style.align__self_stretch]}
              activeOpacity={1}>
              <Title style={[Style.f__12]}>{form_data?.destination?.label}</Title>
              <Subtitle style={[Style.f__10, {fontWeight: "800"}]}>
                {`${form_data?.checkIn?.formatted} - ${form_data?.checkOut?.formatted}`}</Subtitle>
            </TouchableOpacity>
          </Body>
          <Right/>
        </Header>

        <Body style={[{backgroundColor: MUTED_LIGHT_XXX}, Style.w__100]}>

          {/*actions*/}
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
                <AppText style={[Style.ml__2, Style.text__primary]}>{translate('sort')}</AppText>
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
                <AppText style={[Style.ml__2, Style.text__primary]}>{translate('filter')}</AppText>
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
                Style.justify__content_center, Style.align__items_center]}
              onPress={() => {
                this.props.navigation.navigate('map');
              }}>
              <>
                <Icon type="SimpleLineIcons" name="map" style={[Style.f__14, Style.text__info]}/>
                <AppText style={[Style.ml__2, Style.text__primary]}>{translate('map')}</AppText>
              </>
            </TouchableOpacity>

          </View>

          {/*modify search*/}
          <AppModal
            onClose={this.hideModifySearch.bind(this)}
            visibility={this.state.modifySearch}>
            <View style={[Style.w__100, Style.h__100, Style.align__self_start]}>
              <SearchFrom/>
            </View>
          </AppModal>

          {/*loading*/}
          <Conditional>
            <If condition={status === 'loading'}>
              <View style={[Style.w__100, Style.py__0,]}>
                <ProgressBar style={{marginTop: -7, height: 20,}} color={COLOR_WARNING}
                             styleAttr="Horizontal"/>
              </View>
            </If>
          </Conditional>

          {/*hotel list*/}
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

  showModifySearch() {
    this.setState({modifySearch: true});
  }

  hideModifySearch() {
    this.setState({modifySearch: false});
  }
}


export default connector(HotelListPage);
