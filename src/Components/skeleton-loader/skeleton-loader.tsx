import React from 'react';
import {View} from "react-native";
import {GRAY_LIGHT_X} from "../../../native-base-theme/variables/config";
import {RnViewStyleProp} from "native-base";

type propType = {
  type?: 'rect' | 'circle';
  width?: number | string;
  height?: number;
  diameter?: number;
  backgroundColor?: string;
  style?: RnViewStyleProp;
};

const SkeletonLoader = (props: propType) => {

  return (
    props.type === 'rect' ?
      <View style={[
        {
          borderRadius: 2,
          width: props?.width ?? '100%',
          height: props?.height ?? 15,
          backgroundColor: props?.backgroundColor ?? GRAY_LIGHT_X,
        },
        props.style,
      ]}>
      </View> :
      <View style={[
        {
          borderRadius: (props?.diameter ? props?.diameter : 40) / 2,
          width: props?.diameter ? props?.diameter : 40,
          height: props?.diameter ? props?.diameter : 40,
          backgroundColor: props?.backgroundColor ?? GRAY_LIGHT_X,
        },
        props.style,
      ]}>
      </View>
  );
}

export default SkeletonLoader;
