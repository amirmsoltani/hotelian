import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Body, Header, Left, Right} from "native-base";

import {Style} from "Styles";
import {RootStateInterface} from "Typescript/Interfaces";
import {AppTitle, BackNavigation} from "Containers";
import {FlatList, Image, View} from "react-native";

const mapStateToProps = ({hotelReducer: {hotel: {result}}}: RootStateInterface) => ({
  name: result!.hotel.name,
  images: result!.nsg_images
});
const connector = connect(mapStateToProps);
type propsType = ConnectedProps<typeof connector>;

const HotelImageFlatList = (props: propsType) => {

  return (
    <>
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body><AppTitle>{props.name}</AppTitle></Body>
        <Right/>
      </Header>
      <View style={[Style.bg__black, Style.p__2, {flex: 1}]}>
        <FlatList
          data={props.images}
          keyExtractor={(_, index) => index + ''}
          renderItem={({item, index}) => <Image
            style={[{width: undefined, height: 180,}, Style.mb__3]}
            resizeMode="cover" source={{uri: item.original}}/>}
        />
      </View>
    </>
  );
};

export default connector(HotelImageFlatList);
