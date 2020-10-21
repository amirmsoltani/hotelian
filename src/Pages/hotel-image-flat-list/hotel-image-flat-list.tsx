import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Body, Header, Left, Right} from "native-base";

import {Style} from "Styles";
import {RootStateInterface} from "Typescript/Interfaces";
import {AppTitle, BackNavigation} from "Containers";
import {FlatList, View} from "react-native";
import {ProgressiveImage} from "../../Components";
import {BLACK_LIGHT} from "../../../native-base-theme/variables/config";

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
          renderItem={({item, index}) => <View style={[Style.py__1]}>
            <ProgressiveImage
              bgColor={BLACK_LIGHT}
              style={[{width: undefined, height: 180}]}
              resizeMode="cover" source={{uri: item.original}}/>
          </View>}
        />
      </View>
    </>
  );
};

export default connector(HotelImageFlatList);
