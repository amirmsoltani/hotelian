import React from 'react';
import {Image, ImageProps, View} from "react-native";
import {MUTED_LIGHT_XXX} from "../../../native-base-theme/variables/config";

const ProgressiveImage = (props: ImageProps) => {
  return (
    <View style={{backgroundColor: MUTED_LIGHT_XXX}}>
      <Image {...props} />
    </View>
  );
};

export default ProgressiveImage;
