import React from 'react';
import {Image, ImageSourcePropType, View} from "react-native";

import style from './top-property.style';
import {AppText} from "../../Containers";

type propType = {
    caption: string,
    source: ImageSourcePropType,
}
const TopProperty = (props: propType) =>
    <View style={style.wrapper}>
        <View style={style.container}>
            <Image
                resizeMode={'cover'}
                source={props.source}
                style={style.image}/>
            <View>
                <AppText style={style.text}>
                    {props.caption?.length >= 24 ? `${props.caption.substring(0, 25)}...` : props.caption}
                </AppText>
            </View>
        </View>
    </View>

export default TopProperty;
