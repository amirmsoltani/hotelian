import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect, ConnectedProps} from 'react-redux';
import {push, replace} from 'connected-react-router';
import {SafeAreaView, TouchableHighlight, View, VirtualizedList} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Right, Spinner, Subtitle, Title} from 'native-base';

import {
  COLOR_WARNING,
  GRAY_LIGHT_XXX,
  MUTED_LIGHT_XX,
  MUTED_LIGHT_XXX,
  SHADOW_NM,
} from '../../../native-base-theme/variables/config';
import {Style} from 'Styles';
import {HotelCard} from 'Components';
import {GetHotels} from 'Store/Actions';
import {HotelInterface, RootStateInterface} from 'Typescript';
import {AppText} from 'Containers';

const mapStateToProps = ({
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
  hotels: basicData?.hotels,
  facilities: basicData?.facilities,
  hotels_search_id: basicData?.search_id,
  nights: basicData?.search_details.nights_count,
  details: basicData?.search_details,
});

const mapDispatchToProps = {GetHotels, replace, push};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

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
    const {hotels, indexes, facilities, status, form_data, currency, nights} = this.props;
    return (
      <Container>
        <Header style={[Style.bg__primary, Style.flex__row]}>
          <Left>
            <Button onPress={() => this.props.replace('/')} transparent>
              <Icon
                type={'MaterialIcons'}
                name='keyboard-backspace'
                style={[{fontSize: 30}, Style.text__white]}/>
            </Button>
          </Left>
          <View style={[Style.ml__2]}>
            <Title>{form_data?.destination?.label}</Title>
            <Subtitle>{`${form_data?.checkIn?.formatted} - ${form_data?.checkOut?.formatted}`}</Subtitle>
          </View>
          <Right style={{backgroundColor: COLOR_WARNING}}/>
        </Header>
        <Body style={[{backgroundColor: MUTED_LIGHT_XXX}, Style.w__100]}>
          <View style={[
            {height: 50},
            SHADOW_NM,
            Style.bg__white,
            Style.flex__row,
            Style.justify__content_between,
            Style.align__items_center,
          ]}>

            {/*sort*/}
            <TouchableHighlight
              style={[
                Style.col__4,
                Style.h__100,
                Style.flex__row,
                Style.justify__content_center,
                Style.align__items_center]}>
              <>
                <Icon type="MaterialIcons" name="sort" style={[{fontSize: 24}, Style.text__primary]}/>
                <AppText style={[Style.ml__2, Style.text__primary]}>Sort</AppText>
              </>
            </TouchableHighlight>

            {/*divider*/}
            <View style={{width: 1, height: '70%', backgroundColor: MUTED_LIGHT_XX}}/>

            {/*filter*/}
            <TouchableHighlight
              underlayColor={GRAY_LIGHT_XXX}
              style={[
                Style.col__4,
                Style.h__100,
                Style.flex__row,
                Style.justify__content_center,
                Style.align__items_center]}
              onPress={() => Actions.jump('filter')}>
              <>
                <Icon type="MaterialIcons" name="filter-none" style={[{fontSize: 24}, Style.text__primary]}/>
                <AppText style={[Style.ml__2, Style.text__primary]}>Filter</AppText>
              </>
            </TouchableHighlight>

            {/*divider*/}
            <View style={{width: 1, height: '70%', backgroundColor: MUTED_LIGHT_XX}}/>

            {/*map*/}
            <TouchableHighlight
              style={[
                Style.col__4,
                Style.h__100,
                Style.flex__row,
                Style.justify__content_center,
                Style.align__items_center]}
              onPress={() => {
                Actions.push('map');
              }}>
              <>
                <Icon type="SimpleLineIcons" name="map" style={[{fontSize: 24}, Style.text__primary]}/>
                <AppText style={[Style.ml__2, Style.text__primary]}>Map</AppText>
              </>
            </TouchableHighlight>

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
