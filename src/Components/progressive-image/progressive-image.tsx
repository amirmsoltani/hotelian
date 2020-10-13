import React from 'react';
import {Image, ImageProps, View} from "react-native";
import {MUTED_LIGHT_XXX} from "../../../native-base-theme/variables/config";

const ProgressiveImage = (props: ImageProps & { bgColor?: string }) => {
  return (
    <View style={{backgroundColor: props.bgColor || MUTED_LIGHT_XXX}}>
      <Image {...props} />
    </View>
  );
};

export default ProgressiveImage;
