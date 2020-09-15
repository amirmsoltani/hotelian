import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RnViewStyleProp} from "native-base";

const AppRow = (props: { style?: RnViewStyleProp, [key: string]: any }) => {
    return (
        <View {...props}
              style={[styles.row, props?.style]}>
            {props?.children}
        </View>
    )
};

export default AppRow;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
});



