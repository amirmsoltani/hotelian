import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {connect, ConnectedProps} from 'react-redux';
import {Body, Header, Left, Right} from "native-base";
import {StackScreenProps} from '@react-navigation/stack';

import {RootStateInterface} from '../../Typescript';
import {AppTitle, BackNavigation} from "../../Containers";
import {translate as t} from "../../Lib/Languages";
import {Style} from "../../Styles";
import {StatusBar, View} from "react-native";

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
    <View style={{flex: 1,}}>
      <Header style={[Style.bg__primary,]}>
        <StatusBar hidden/>
        <Left><BackNavigation/></Left>
        <Body><AppTitle>{t('map')}</AppTitle></Body>
        <Right/>
      </Header>
      <View style={[Style.bg__danger, Style.w__100, {flex: 1,}]}>
        <MapView
          region={{
            latitude: +hotels[indexes[0]].lat,
            longitude: +hotels[indexes[0]].lng,
            latitudeDelta: .3,
            longitudeDelta: .3,
          }}
          style={{width: '100%', height: '100%'}}>
          {
            indexes.map(index => <Marker coordinate={{latitude: +hotels[index].lat, longitude: +hotels[index].lng}}
                                         icon={image} key={hotels[index].hotel_id + index}/>)
          }
        </MapView>
      </View>
    </View>
  );
};

export default connector(HotelMapPage);
