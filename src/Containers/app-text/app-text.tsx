import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RnTextStyleProp} from "native-base";

import {COLOR_BLACK, TEXT_SIZE} from "../../../native-base-theme/variables/config";

const AppText = (props: { style?: RnTextStyleProp, [key: string]: any }) => {
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
        // fontFamily: Arial,
        fontSize: TEXT_SIZE,
        color: COLOR_BLACK,
        textAlign:'left',
    },
});



