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
            <Icon name='search'
                  style={style.icon}
                  type={'AntDesign'}/>
            <Text style={style.text}>
                {props.text}
            </Text>
        </View>
    );
};

export default FormRow;
