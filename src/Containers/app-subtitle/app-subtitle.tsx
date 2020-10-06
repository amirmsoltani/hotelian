import React from 'react';
import {Text} from 'react-native';
import {RnTextStyleProp} from "native-base";

import {Style} from "Styles";

const AppSubtitle: React.FC<{ style?: RnTextStyleProp, [key: string]: any, children: string }> = (props) => {
  return (
    <Text
      numberOfLines={1}
      {...props}
      style={[
        Style.text__white,
        Style.f__12,
        Style.text__left,
        Style.text__capitalize,
        props?.style
      ]}>
      {props?.children ? props.children.charAt(0).toUpperCase() + props.children.slice(1) : ''}
    </Text>
  )
};

export default AppSubtitle;



