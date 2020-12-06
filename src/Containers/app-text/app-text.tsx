import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {RnTextStyleProp} from "native-base";

import {COLOR_BLACK, FONT_FAMILY, TEXT_SIZE} from "../../../native-base-theme/variables/config";

type propTypes = {
  //capitalize first letter of string
  firstLetter?: boolean,

  style?: RnTextStyleProp,
  [key: string]: any
}
const AppText: FunctionComponent<propTypes & TextProps> = (props) => {
  return (
    <Text {...props} style={[styles.myAppText, props?.style]}>
      {props.firstLetter && typeof props.children === 'string' ?
        props.children.charAt(0).toUpperCase() + props.children.slice(1) : props.children}
    </Text>
  )
};
export default AppText;

const styles = StyleSheet.create({
  myAppText: {
    fontFamily: `${FONT_FAMILY}Medium`,
    fontSize: TEXT_SIZE,
    color: COLOR_BLACK,
    textAlign: 'left',
  },
});



