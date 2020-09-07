import React from 'react';
import {Image} from 'react-native';
import {CardItem, H1, H2, H3, Text, Badge, View, Icon} from 'native-base';
import {TouchableHighlight} from 'react-native';
import {HotelInterface} from '../../Typescript';

type Props = {hotel: HotelInterface};
export default ({hotel: {image, name, location, address,price,star}}: Props) => {

  return (
    <CardItem style={{flexDirection: 'column'}}>
      <Image source={{uri: image}} style={{width: '100%', height: 230}}/>
      <View>
        <Icon type='Entypo' name='location'/>
        <View>
          <H3>{location} </H3>
          <Text>{address}</Text>
          <Text>on map </Text>
        </View>
        <TouchableHighlight>
          <Text> on map</Text>
        </TouchableHighlight>
      </View>
      <View>
        {

        }
      </View>
      <H1> {name}</H1>
      <Badge>

      </Badge>
      <View>
        <H2>{price.total} </H2>
        <Text> for night</Text>
      </View>
      <TouchableHighlight>
        <Text>
            book it
        </Text>
      </TouchableHighlight>


    </CardItem>
  );
};
