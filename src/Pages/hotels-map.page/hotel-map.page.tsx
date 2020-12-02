import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {connect, ConnectedProps} from 'react-redux';
import {Body, Header, Left, Right} from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';

import {HotelInterface, RootStateInterface} from '../../Typescript';
import {AppTitle, BackNavigation} from '../../Containers';
import {translate as t} from '../../Lib/Languages';
import {Style} from '../../Styles';
import {StatusBar, View} from 'react-native';

const mapStateToProps = ({hotelsReducer: {filter, basicData}}: RootStateInterface) => ({
  hotels: basicData?.hotels,
  indexes: filter?.hotels,
});


const connector = connect(mapStateToProps);

const image = __DEV__ ? require('Assets/Icons/single-pin.png') : require('Assets/Icons/pin.png');
type Props = ConnectedProps<typeof connector> & StackScreenProps<{map: HotelInterface, hotels: any}, 'map'>;
const HotelMapPage = ({hotels, indexes, navigation, ...props}: Props) => {
  if (!indexes && !props.route.params) {
    navigation.replace('hotels');
    return <></>;
  }
  let lat: number, lng: number;
  if (props.route.params) {
    lat = +props.route.params.lat;
    lng = +props.route.params.lng;
  } else {
    lat = +hotels![indexes![0]].lat;
    lng = +hotels![indexes![0]].lng;
  }
  return (
    <View style={{flex: 1}}>
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body><AppTitle>{t('map')}</AppTitle></Body>
        <Right/>
      </Header>
      <View style={[Style.bg__danger, Style.w__100, {flex: 1}]}>
        <MapView
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
          }}
          style={{width: '100%', height: '100%'}}>
          {props.route.params ?
            <Marker coordinate={{latitude: +props.route.params.lat, longitude: +props.route.params.lng}}
                    icon={image}
            />
            : indexes!.map(index => <Marker coordinate={{latitude: +hotels![index].lat, longitude: +hotels![index].lng}}
                                            icon={image} key={hotels![index].hotel_id + index}/>)
          }
        </MapView>
      </View>
    </View>
  );
};

export default connector(HotelMapPage);
