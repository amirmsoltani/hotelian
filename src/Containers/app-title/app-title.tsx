import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {RnTextStyleProp} from "native-base";

import {Style} from "Styles";

type propTypes = {
  style?: RnTextStyleProp;
  children: string;
  hasSubtitle?: boolean;
  [key: string]: any;
}
const AppTitle: FunctionComponent<propTypes> = (props) => {
  return (
    <Text
      numberOfLines={1}
      {...props}
      style={[
        Style.text__white,
        (props.hasSubtitle) ? Style.f__14 : Style.f__18,
        Style.text__left,
        Style.text__bold,
        Style.text__capitalize,
        props?.style
      ]}>
      {props?.children ? props.children.charAt(0).toUpperCase() + props.children.slice(1) : ''}
    </Text>
  )
};

AppTitle.defaultProps = {
  hasSubtitle: false,
}

export default AppTitle;



