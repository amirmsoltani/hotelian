import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StatusBar} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateInterface} from '../../Typescript';
import {StackScreenProps} from '@react-navigation/stack';

const mapStateToProps = ({hotelsReducer: {filter, basicData}}: RootStateInterface) => ({
  hotels: basicData!.hotels,
  indexes: filter!.hotels,
});


const connector = connect(mapStateToProps);

const image = require('Assets/Icons/single-pin.png');
type Props = ConnectedProps<typeof connector> & StackScreenProps<any>;
;
const HotelMapPage = ({hotels, indexes, navigation}: Props) => {
  if (indexes === undefined) {
    navigation.replace('hotels');
    return <></>;
  }
  return (
    <>
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
      <StatusBar hidden={true}/>
    </>
  );
};

export default connector(HotelMapPage);
