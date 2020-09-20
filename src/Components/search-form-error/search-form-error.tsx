import React from 'react';
import {Image, View} from "react-native";

import style from '../search-form-idle/search-form-idle.style';
import {AppText} from "../../Containers";

const SearchFormError = () => {
    const _data = {
        source: require('../../Assets/Images/error.png'),
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
                <AppText style={style.title}>Whoops!</AppText>
                <AppText style={style.caption}>Something went wrong, please try later.</AppText>
            </View>
        </View>
    );
};

export default SearchFormError;
