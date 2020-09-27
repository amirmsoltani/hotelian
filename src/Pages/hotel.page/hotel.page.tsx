import React, {Component} from 'react';
import {SafeAreaView, StatusBar, Text, VirtualizedList} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Body, Spinner} from 'native-base';
import {HotelInterface, RootStateInterface} from '../../Typescript';
import {replace, push} from 'connected-react-router';
import {GetHotel} from 'Store/Actions';
import {StackScreenProps} from '@react-navigation/stack';
import {Conditional, If, ElIf, Else} from 'Components';

const mapStateToProps = ({hotelsReducer: {basicData}, searchReducer: {search_id}, hotelReducer: {hotel: {status, result}},router}: RootStateInterface) => ({
  search_id,
  status,
  result,
  hotels: basicData?.hotels,
  router
});

const mapDispatchToProps = {
  GetHotel,
  replace,
  push,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props =
  ConnectedProps<typeof connector>
  & StackScreenProps<{hotel: {id: string, name: string, checkIn?: string, checkOut?: string}}, 'hotel'>;

class HotelListPage extends Component<Props> {

  componentDidMount() {
    const {route: {params: {id}}, result} = this.props;
    if (this.props.status === undefined || (result && result.hotel.id !== +id))
      this.props.GetHotel(+id);
  }

  bookIt(id: number) {
    this.props.push(`/passengers/${id}`);
  }


  render() {
    const {status, result, route: {params: {checkIn, checkOut, name}}} = this.props;
    return (
      <>
        <Body>
          <SafeAreaView>
            <Conditional>
              <If condition={status === 'ok'}>
                <Text>{checkIn}</Text>
                <Text>{checkOut}</Text>
                <Text>{name}</Text>
              </If>
              <Else>
                <Text>
                  not loaded
                </Text>
                <Text>{checkIn}</Text>
                <Text>{checkOut}</Text>
                <Text>{name}</Text>
              </Else>
            </Conditional>
          </SafeAreaView>
        </Body>
      </>
    );
  }
}


export default connector(HotelListPage);
