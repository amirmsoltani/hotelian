import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from "native-base";

import style from './form-row-styles';

type formRow = {
    text: string;
    isEmpty: boolean;
    hasError: boolean;

    //for assigning icon
    type: string;
};
const FormRow = (props: formRow) => {
    return (
        <View>
            <Icon name='location'
                  style={style.icon}
                  type={'EvilIcons'}/>
            <Text style={style.text}>
                {props.text}
            </Text>
        </View>
    );
};

export default FormRow;
