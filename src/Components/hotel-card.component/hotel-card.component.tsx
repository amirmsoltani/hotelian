import React from 'react';
import {Image} from 'react-native';
import {CardItem, H1, H2, H3, Text, Badge, View, Icon} from 'native-base';
import {TouchableHighlight} from 'react-native';
import {HotelInterface} from '../../Typescript';

type Props = {hotel: HotelInterface, hotelFacilities: string[]};
export default ({hotel: {image, name, location, address, price, star, room}, hotelFacilities}: Props) => {

  return (
    <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
      <Image source={{uri: image}} style={{width: '100%', height: 250}}/>
      <View style={{
        width: '100%',
        height: 80,
        backgroundColor: 'rgba(12,20,150,.4)',
        marginTop: -80,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <View style={{height: 50, flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10}}>
          <Icon type='Entypo' name='location' style={{color: 'white'}}/>
        </View>
        <View style={{maxWidth: '70%'}}>
          <H3 style={{color: 'white'}}>{location} </H3>
          <Text style={{color: 'white'}}>{address}</Text>
        </View>
        <TouchableHighlight>
          <Text style={{fontWeight: '300', color: 'white'}}> on map</Text>
        </TouchableHighlight>
      </View>
      <CardItem style={{flexDirection: 'column', alignItems: 'flex-start'}}>
        <View style={{flexDirection: 'row', marginLeft: 8}}>
          {
            [...(new Array(star).keys())].map(index => (
              <Icon type={'AntDesign'} name="star" key={index} style={{fontSize: 16, color: '#efb300'}}/>
            ))
          }
        </View>
        <H1> {name}</H1>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 5,
          justifyContent: 'space-between',
          marginVertical: 15,

        }}>
          {
            hotelFacilities.slice(0, 8).map(facility => (
              <View style={{flexDirection: 'row', marginHorizontal: 7}} key={facility}>
                <Icon type='Entypo' name="check" style={{fontSize: 18, color: 'green'}}/>
                <Text style={{color: 'green'}}>{facility}</Text>
              </View>
            ))
          }
          {
            hotelFacilities.length > 8 ?
              <TouchableHighlight>
                <Text>
                  {hotelFacilities.length - 8} more
                </Text>
              </TouchableHighlight> : <></>
          }
        </View>
        {room.breakfast ?
          <Badge style={{backgroundColor: '#359bba', marginHorizontal: 7}}><Text>breakfast
            included</Text></Badge> : <></>
        }
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <View>
            <H2 style={{color: 'red', fontWeight: 'bold'}}>{price.total} </H2>
            <Text style={{color: 'red'}}> for night</Text>
          </View>
          <TouchableHighlight
            style={{
              backgroundColor: 'red',
              paddingHorizontal: 20,
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: 4,
            }}>
            <Text style={{color: 'white'}}>
              book it {'\u003e'}
            </Text>
          </TouchableHighlight>
        </View>

      </CardItem>
    </View>
  );
};
