import React from 'react';
import {Image, View} from "react-native";

import style from './search-form-idle.style';
import {AppText} from "../../Containers";

type propsType = { mode: string }
const SearchFormIdle = (props: propsType) => {
    const _data = {
        source: require('../../Assets/Images/not_found.png'),
    };
    return (
        <View>
            <View style={style.container}>
                <Image
                    style={style.image}
                    source={_data.source}
                    resizeMode='contain'
                />
            </View>
            <View style={style.textContainer}>
                <AppText style={style.title}>Hmm, {props.mode} not found!</AppText>
                <AppText style={style.caption}>We could not found the {props.mode} you are looking for.</AppText>
            </View>
        </View>
    );
};

export default SearchFormIdle;
