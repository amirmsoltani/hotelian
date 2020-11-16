import React, {FunctionComponent} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RnTextStyleProp} from "native-base";

import {COLOR_BLACK, FONT_FAMILY, TEXT_SIZE} from "../../../native-base-theme/variables/config";

type propTypes = {
  style?: RnTextStyleProp,

  //capitalize first letter of string ONLY and ONLY
  firstLetter?: boolean,

  [key: string]: any
}
const AppText: FunctionComponent<propTypes> = (props) => {
  return (
    <Text {...props} style={[styles.myAppText, props?.style]}>
      {props.firstLetter && typeof props.children === 'string'?
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



