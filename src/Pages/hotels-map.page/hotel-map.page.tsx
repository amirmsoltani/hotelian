import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {connect, ConnectedProps} from 'react-redux';
import {Body, Container, Header, Left} from "native-base";
import {StackScreenProps} from '@react-navigation/stack';

import {RootStateInterface} from '../../Typescript';
import {AppTitle, BackNavigation} from "../../Containers";
import {translate as t} from "../../Lib/Languages";
import {Style} from "../../Styles";

const mapStateToProps = ({hotelsReducer: {filter, basicData}}: RootStateInterface) => ({
  hotels: basicData!.hotels,
  indexes: filter!.hotels,
});


const connector = connect(mapStateToProps);

const image = require('Assets/Icons/single-pin.png');
type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;
const HotelMapPage = ({hotels, indexes, navigation}: Props) => {
  if (indexes === undefined) {
    navigation.replace('hotels');
    return <></>;
  }
  return (
    <Container>
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body><AppTitle>{t('map')}</AppTitle></Body>
      </Header>
      <Body>
        <MapView
          region={{
            latitude: +hotels[indexes[0]].lat,
            longitude: +hotels[indexes[0]].lng,
            latitudeDelta: .3,
            longitudeDelta: .3,
          }}
          style={{width: '100%', height: '100%'}}
        >
          {
            indexes.map(index => <Marker coordinate={{latitude: +hotels[index].lat, longitude: +hotels[index].lng}}
                                         icon={image} key={hotels[index].hotel_id}/>)
          }
        </MapView>
      </Body>
    </Container>
  );
};

export default connector(HotelMapPage);
