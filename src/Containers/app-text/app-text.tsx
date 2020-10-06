import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {RnTextStyleProp} from "native-base";

import {COLOR_BLACK, FONT_FAMILY, TEXT_SIZE} from "../../../native-base-theme/variables/config";

type propTypes = {
  style?: RnTextStyleProp,
  [key: string]: any
}
const AppText: React.FC<propTypes> = (props) => {
  return (
    <Text {...props}
          style={[styles.myAppText, props?.style]}>
      {props?.children}
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



