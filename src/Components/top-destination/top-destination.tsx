import React from 'react';
import {Image, ImageSourcePropType, View} from "react-native";

import style from './top-destination.style';
import {AppText} from "../../Containers";

type propType = {
  caption: string,
  source: ImageSourcePropType,
}
const TopDestination = (props: propType) =>
  <View style={style.wrapper}>
    <Image
      source={props.source}
      style={style.image}/>
    <View style={style.overlayContainer}>
      <View style={style.textOverlay}>
        <AppText style={style.text}>
          {props.caption?.length >= 24 ? `${props.caption.substring(0, 25)}...` : props.caption}
        </AppText>
      </View>
    </View>
  </View>

export default TopDestination;
